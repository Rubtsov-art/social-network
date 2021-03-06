import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FriendsContainer from './components/Friends/FriendsContainer';
import Commercial from './components/Commercial/Commercial';
import { Route, withRouter, Switch, HashRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './reusingComponent/animation/Preloader';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import withReactSuspense from './components/hoc/withReactSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Photos = React.lazy(() => import('./components/Photos/Photos'));

class App extends React.Component {

  catchAllUnhandedErrors = (reason, promise) => {
    alert('some error')
  }

  componentDidMount = () => {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandedErrors)
  }

  componentWillUnmount = () => {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandedErrors)
  }

  render = () => {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='wrapper'>
        <Header />
        <article>
          <FriendsContainer />
        </article>
        <main className='main'>
          <Switch>
            <Route exact path='/' render={withReactSuspense(Login)} />
            <Route path='/profile/:userId?' render={withReactSuspense(ProfileContainer)} />
            <Route path='/messages' render={withReactSuspense(MessagesContainer)} />
            <Route path='/settings' component={withReactSuspense(Settings)} />
            <Route path='/music' component={withReactSuspense(Music)} />
            <Route path='/photos' component={withReactSuspense(Photos)} />
            <Route path='/users' render={withReactSuspense(UsersContainer)} />
            <Route path='/login' render={withReactSuspense(Login)} />
            <Route path='*' render={<div>404 not found</div>} />
          </Switch>
        </main>
        <article>
          <Commercial />
        </article>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);


const CompleteApp = (props) => {
  return (<HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>)
}

export default CompleteApp
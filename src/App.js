import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';
import Friends from './components/Friends/Friends';
import Commercial from './components/Commercial/Commercial';
import { Route, withRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import MessagesContainer from './components/Messages/MessagesContainer';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './reusingComponent/animation/Preloader';


class App extends React.Component {

  componentDidMount = () => {
    this.props.initializeApp()
  }

  render = () => {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='wrapper'>
        <Header />
        <article>
          <Friends store={this.props.store} />
        </article>
        <main className='main'>
          <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store} />} />
          <Route path='/messages' render={() => <MessagesContainer store={this.props.store} />} />
          <Route path='/settings' component={Settings} />
          <Route path='/music' component={Music} />
          <Route path='/photos' component={Photos} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
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

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

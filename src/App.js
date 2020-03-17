import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from './components/Messages/Messages';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';
import Friends from './components/Friends/Friends';
import Commercial from './components/Commercial/Commercial';
import {Route} from 'react-router-dom';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import MessagesContainer from './components/Messages/MessagesContainer';


const App = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <article>
        <Friends store={props.store} />
      </article>
      <main className='main'>
        <Route path='/profile/:userId?' render={() => <ProfileContainer store={props.store} />} />
        <Route path='/messages' render={() => <MessagesContainer store={props.store} />} />
        <Route path='/settings' component={Settings} />
        <Route path='/music' component={Music} />
        <Route path='/photos' component={Photos} />
        <Route path='/users' render={() => <Users />} />
        <Route path='/login' render={() => <Login />} />
      </main>
      <article>
        <Commercial />
      </article>

    </div>
  );
};

export default App;

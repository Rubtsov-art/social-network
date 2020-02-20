import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';
import Friends from './components/Friends/Friends';
import Commercial from './components/Commercial/Commercial';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <article>
          <Friends state={props.state.friendsList.friends}/>
        </article>
        <main className='main'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch = {props.dispatch} />} />
          <Route path='/messages' render={() => <Messages state={props.state.messagesPage} dispatch = {props.dispatch} />} />
          <Route path='/settings' component={Settings} />
          <Route path='/music' component={Music} />
          <Route path='/photos' component={Photos} />
        </main>
        <article>
          <Commercial />
        </article>

      </div>
    </BrowserRouter>
  );
};

export default App;

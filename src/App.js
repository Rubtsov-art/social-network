import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from './components/Messages/Messages';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import Photos from './components/Photos/Photos';


const App = (props) => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header />
      <main className='main'>
      <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
      <Route path='/messages' render={() => <Messages state={props.state.messagesPage}/>}/> 
      <Route path='/settings' component={Settings}/>
      <Route path='/music' component={Music}/>
      <Route path='/photos' component={Photos}/>
      </main>
      
    </div>
    </BrowserRouter>
  );
};

export default App;

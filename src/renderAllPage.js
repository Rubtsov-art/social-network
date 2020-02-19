import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './redax/state';
import {changeInTextarea} from './redax/state';

export let renderAllPage = (state) => {
ReactDOM.render(<App 
    state={state} addPost={addPost} changeInTextarea={changeInTextarea}
/>, document.getElementById('root'));
}

serviceWorker.unregister();
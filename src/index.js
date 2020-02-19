import * as serviceWorker from './serviceWorker';
import state from './redax/state';
import {subscribe} from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redax/state';
import {changeInTextarea} from './redax/state';

let renderAllPage = (state) => {
    ReactDOM.render(<App 
        state={state} addPost={addPost} changeInTextarea={changeInTextarea}
    />, document.getElementById('root'));
    };
    
subscribe(renderAllPage);
renderAllPage(state);
serviceWorker.unregister();

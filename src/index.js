import * as serviceWorker from './serviceWorker';
import store from './redax/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderAllPage = (state) => {
    ReactDOM.render(<App 
        state={state} addPost={store.addPost.bind(store)} changeInTextarea={store.changeInTextarea.bind(store)}
    />, document.getElementById('root'));
    };
    
store.subscribe(renderAllPage);
store._collSubscriber(store.getState());
serviceWorker.unregister();

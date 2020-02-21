import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderAllPage = (state) => {
    ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, 
    document.getElementById('root'));
    };
    

renderAllPage(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderAllPage(state)
});
serviceWorker.unregister();

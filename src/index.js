import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CompleteApp from './App';

ReactDOM.render(
            <CompleteApp/>,
    document.getElementById('root'));

serviceWorker.unregister();

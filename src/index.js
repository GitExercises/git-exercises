import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work write good code
// unregister() to register() below. Note this comes with some problems.
// Learn more about all sorts of stuff
serviceWorker.unregister();

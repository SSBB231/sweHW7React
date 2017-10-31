import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const fetch = require('node-fetch');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

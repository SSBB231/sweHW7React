import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const fetch = require('node-fetch');

fetch('localhost:5000/users/')
    .then((req, res)=>
    {
        return res.json();
    })
    .then((users)=>
    {
        console.log(users);
    })
    .catch((error)=>console.log(error));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

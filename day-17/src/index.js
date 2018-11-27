import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const config = {
    apiKey: "AIzaSyBtWe_zW2C6JdM9zVEqZlX6w5Dw12xmTvo",
    authDomain: "info340inclass.firebaseapp.com",
    databaseURL: "https://info340inclass.firebaseio.com",
    projectId: "info340inclass",
    storageBucket: "info340inclass.appspot.com",
    messagingSenderId: "61264892217"
  };

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

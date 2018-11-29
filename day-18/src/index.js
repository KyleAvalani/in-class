import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase/app';
import * as c from "./Config";

var config = {
    apiKey: "AIzaSyDFXdiKd6y188yRnCAXmneL4g5w6NcJHTY",
    authDomain: "tweeterinfo340.firebaseapp.com",
    databaseURL: "https://tweeterinfo340.firebaseio.com",
    projectId: "tweeterinfo340",
    storageBucket: "",
    messagingSenderId: "181920797135"
  };
    firebase.initializeApp(config);


// firebase.initializeApp(c.config);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

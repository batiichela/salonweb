import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCZhkdhCEdcOHuAQnNAK1Sqjw6Mm7IVnEs",
    authDomain: "salonweb-bcbd7.firebaseapp.com",
    databaseURL: "https://salonweb-bcbd7.firebaseio.com",
    projectId: "salonweb-bcbd7",
    storageBucket: "salonweb-bcbd7.appspot.com",
    messagingSenderId: "332419261071",
    appId: "1:332419261071:web:a28a1b97bac44ad29606fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.auth();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

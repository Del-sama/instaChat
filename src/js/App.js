import React, { Component } from 'react';
import firebase from 'firebase';
import '../css/App.css';
import ContactList from './components/ContactList';


class App extends Component{
  componentWillMount() {
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyD95AxJJIv0ibXh62T_1lhWmvqMm0TTJF0",
        authDomain: "instachat-db689.firebaseapp.com",
        databaseURL: "https://instachat-db689.firebaseio.com",
        projectId: "instachat-db689",
        storageBucket: "instachat-db689.appspot.com",
        messagingSenderId: "751427616967"
      };
      firebase.initializeApp(config);
  }
  render() {
    return <ContactList />
  }
}

export default App;
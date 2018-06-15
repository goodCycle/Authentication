import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBKpBc4m3g3QZ-XUDLhQHA2LemBP5QeaSc',
    authDomain: 'authentication-808fc.firebaseapp.com',
    databaseURL: 'https://authentication-808fc.firebaseio.com',
    projectId: 'authentication-808fc',
    storageBucket: 'authentication-808fc.appspot.com',
    messagingSenderId: '566711988137'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;

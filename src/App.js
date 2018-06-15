import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyBKpBc4m3g3QZ-XUDLhQHA2LemBP5QeaSc',
    authDomain: 'authentication-808fc.firebaseapp.com',
    databaseURL: 'https://authentication-808fc.firebaseio.com',
    projectId: 'authentication-808fc',
    storageBucket: 'authentication-808fc.appspot.com',
    messagingSenderId: '566711988137'
    });
    console.log('state', this.state);
    //event handler
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      default:
        return (<View style={styles.spinnerStyle}>
                  <Spinner size="large" />
                </View>);
      case true:
        return (<View style={styles.logOutContainerStyle}>
                  <Button onPress={() => firebase.auth().signOut()}>
                    Log Out
                  </Button>
               </View>);
      case false:
        return <LoginForm />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
 logOutContainerStyle: {
   height: 50,
   paddingLeft: 5,
   paddingRight: 5,
   paddingTop: 10,
 },
 spinnerStyle: {
   paddingTop: 100,
   height: 300,
 }
};

export default App;

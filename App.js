
import React, { Component } from 'react';
import Rotas from './src/rotas.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import firebase from 'firebase';
import {BackAndroid} from 'react-native'


export default class App extends Component{

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
  
  handleBackButton() {
    return true;
  }

  componentWillMount() {

    var config = {
      apiKey: "AIzaSyAGVXB3oOgvVJIz4xfJTpgF4sO-NiFgAh0",
      authDomain: "multasbsi.firebaseapp.com",
      databaseURL: "https://multasbsi.firebaseio.com",
      projectId: "multasbsi",
      storageBucket: "multasbsi.appspot.com",
      messagingSenderId: "167973088293"
    };
    try{
      if(!firebase.apps.lenght){
        firebase.initializeApp(config);
      }else{
        firebase.app()
      }
    }catch(err){}
  
  }

  render() {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Rotas />
      </Provider>

    );
  }
}


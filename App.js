
import React, { Component } from 'react';
import Rotas from './src/rotas.js';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';


console.disableYellowBox = true;
export default class App extends Component{

  render() {
    return (
      <Provider store = {createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Rotas />
      </Provider>

    );
  }
}


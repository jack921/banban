/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './app/redux/store/ConfigureStore';
import Main from './app/Main';

const store=configureStore();
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
          <Main/>
      </Provider>
    );
  }
}



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';
import Login from './screens/Login/Login.js';



export default class DemoLogin extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);

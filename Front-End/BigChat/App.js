/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,Platform, StyleSheet, Text, View} from 'react-native';
import Login from './src/components/Login/Login.js';
import ScrollList from './src/components/ScrollListExample/ScrollListExample.js'


export default class DemoLogin extends Component {
  render() {
    return (
      <ScrollList/>
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);

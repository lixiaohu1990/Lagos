/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import SplashPage from './Splash.js';
class Lagou extends Component {
  render() {
    var defaultName = 'Splash';
    var defaultComponent = SplashPage;
    return (
      <Navigator
        initialRoute={{name:defaultName, component:defaultComponent}}
        configureScene={(router) => {
          return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
        }}

        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>;
        }}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Lagou', () => Lagou);

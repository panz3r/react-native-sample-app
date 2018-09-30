// @flow

import React, { PureComponent } from 'react';
import SplashScreen from 'react-native-splash-screen';

import { Logger } from '~/utils';

import RootStack from './screens';

export default class App extends PureComponent<*, *> {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    Logger.debug('HomeScreen: render');

    return <RootStack />;
  }
}

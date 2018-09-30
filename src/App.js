// @flow

import React, { PureComponent } from 'react';

import { Logger } from '~/utils';

import RootStack from './screens';

export default class App extends PureComponent<*, *> {
  render() {
    Logger.debug('HomeScreen: render');

    return <RootStack />;
  }
}

// @flow

import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider as InAppNotificationProvider } from 'react-native-in-app-notification';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import { store, storeIsReady } from '~/state';
import { Logger } from '~/utils';

import RootStack from './screens';

export default class App extends PureComponent<*, *> {
  state = {
    loading: true
  };

  componentDidMount() {
    storeIsReady().then(() => {
      this.setState(
        {
          loading: false
        },
        () => {
          SplashScreen.hide();
        }
      );
    });
  }

  render() {
    Logger.debug('HomeScreen: render');

    const { loading } = this.state;

    if (loading) {
      return <ActivityIndicator />;
    }

    return (
      <InAppNotificationProvider>
        <Provider store={store}>
          <RootStack />
        </Provider>
      </InAppNotificationProvider>
    );
  }
}

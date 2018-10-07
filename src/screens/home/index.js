import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import { withInAppNotification } from 'react-native-in-app-notification';
import { Button } from 'native-base';

import { ScreenContainer } from '~/common';
import { withT } from '~/i18n';
import { Logger } from '~/utils';

class HomeScreen extends PureComponent {
  _showNotification = () => {
    this.props.showNotification({
      title: 'You pressed it!',
      message: 'The notification has been triggered'
    });
  };

  render() {
    Logger.debug('HomeScreen: render');

    const { t } = this.props;

    return (
      <ScreenContainer noHeader style={styles.container}>
        <Text style={styles.welcome}>{t('welcome')}</Text>
        <Text style={styles.instructions}>{t('get started')}</Text>
        <Text style={styles.instructions}>{t(`instructions ${Platform.OS}`)}</Text>
        <Button full rounded primary style={styles.notificationBtn} onPress={this._showNotification}>
          <Text>Show Notification</Text>
        </Button>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  notificationBtn: {
    marginTop: 10
  }
});

export default withInAppNotification(withT(HomeScreen));

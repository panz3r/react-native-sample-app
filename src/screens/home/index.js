import React, { PureComponent } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { withT } from '../../i18n';

class HomeScreen extends PureComponent {
  render() {
    const { t } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{t('welcome')}</Text>
        <Text style={styles.instructions}>{t('get started')}</Text>
        <Text style={styles.instructions}>{t(`instructions ${Platform.OS}`)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
  }
});

export default withT(HomeScreen);

import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';

import { ScreenContainer } from '~/common';
import { withT } from '~/i18n';
import { Logger } from '~/utils';

import { LoginForm } from './components';

class LoginScreen extends PureComponent {
  _onLogin = user => {
    const { navigation } = this.props;

    Logger.debug({ user });

    // Go to Main application stack
    navigation.navigate('Main');
  };

  render() {
    Logger.debug('LoginScreen: render');

    const { t } = this.props;

    return (
      <ScreenContainer noHeader style={styles.container}>
        <LoginForm onLogin={this._onLogin} />
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default withT(LoginScreen);

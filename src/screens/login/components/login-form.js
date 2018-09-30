import React, { Fragment, PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Form, Icon, Input, Item, Row, Text } from 'native-base';

import { withT } from '~/i18n';
import { Logger } from '~/utils';

class LoginForm extends PureComponent {
  state = {
    loading: false,
    username: '',
    password: ''
  };

  _onChangeText = (fieldName: string) => (newValue: string) => this.setState({ [fieldName]: newValue });

  _submitForm = () => {
    const { onLogin } = this.props;
    const { username, password } = this.state;

    onLogin && onLogin({ username, password: '****' });
  };

  render() {
    Logger.debug('LoginForm: render');
    const { t } = this.props;

    return (
      <Fragment>
        <Form>
          <Item regular>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this._onChangeText('username')}
              placeholder={t('login username placeholder')}
              returnKeyType="next"
            />
          </Item>
          <Item regular>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={this._onChangeText('password')}
              placeholder={t('login password placeholder')}
              returnKeyType="send"
              secureTextEntry
            />
          </Item>
        </Form>

        <Row style={styles.actionRow}>
          <Button iconLeft primary onPress={this._submitForm}>
            <Icon name="log-in" />
            <Text>{t('login action label').toUpperCase()}</Text>
          </Button>
        </Row>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  actionRow: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  }
});

export default withT(LoginForm);

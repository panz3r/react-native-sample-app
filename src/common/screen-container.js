import { Body, Container, Header, Title, Content, Left, Right, Button, Icon } from 'native-base';
import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';
import { DEBUG } from 'react-native-dotenv';

import { withT } from '../i18n';

class ScreenContainer extends PureComponent {
  _handleClick = actionId => {
    this.props.onAction && this.props.onAction(actionId);
  };

  _goBack = () => this._handleClick('back');

  render() {
    console.log('ScreenContainer', 'render');
    const {
      children,
      headerText,
      noHeader,
      noPadding,
      noScroll,
      noTranslateText,
      onAction,
      showBack,
      showLogout,
      style,
      t
    } = this.props;

    return (
      <Container>
        {DEBUG === 'true' && <Text style={styles.debugBadge}>DEBUG</Text>}
        {!noHeader && (
          <Header>
            <Left>
              {showBack && (
                <Button key="backButton" onPress={this._goBack} transparent>
                  <Icon name="arrow-back" />
                </Button>
              )}
            </Left>
            <Body>{!!headerText && <Title>{!noTranslateText ? t(headerText) : headerText}</Title>}</Body>
            <Right>
              {showLogout && (
                <Button key="logoutButton" onPress={this.onAction} transparent>
                  <Icon name="log-out" />
                </Button>
              )}
            </Right>
          </Header>
        )}
        <Content
          contentContainerStyle={style}
          scrollEnabled={!noScroll}
          bounces={!noScroll}
          padder={!noPadding}
        >
          {children}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  debugBadge: {
    color: 'white',
    position: 'absolute',
    top: 15,
    right: -30,
    paddingTop: 5,
    paddingLeft: 35,
    paddingBottom: 5,
    paddingRight: 35,
    backgroundColor: 'green',
    transform: [{ rotate: '45deg' }],
    borderWidth: 2,
    borderColor: 'lightgreen',
    zIndex: 999,
    elevation: 999
  }
});

export default withT(ScreenContainer);

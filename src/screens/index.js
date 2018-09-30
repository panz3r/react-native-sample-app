// @flow

import { createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './home';
import LoginScreen from './login';

// Application stack
const MainStack = createDrawerNavigator({
  Home: HomeScreen
});

// Login/SignUp stack
const LoginStack = createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    headerMode: 'none'
  }
);

// Root stack
const RootStack = createSwitchNavigator(
  {
    Login: LoginStack,
    Main: MainStack
  },
  {
    initialRouteName: 'Login'
  }
);

export default RootStack;

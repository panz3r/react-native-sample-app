// @flow

import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './home';

const RootStack = createDrawerNavigator({
  Home: HomeScreen
});

export default RootStack;

/** @format */

import { AppRegistry } from 'react-native';
import { Sentry } from 'react-native-sentry';
import { DEBUG, SENTRY_PUBLIC_KEY, SENTRY_APP_ID } from 'react-native-dotenv';

import App from './src/App';
import { name as appName } from './app.json';

Sentry.config(`https://${SENTRY_PUBLIC_KEY}@sentry.io/${SENTRY_APP_ID}`, {
  environment: DEBUG === 'true' ? 'Development' : 'Production'
}).install();

AppRegistry.registerComponent(appName, () => App);

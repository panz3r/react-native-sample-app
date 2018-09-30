// @flow

import { Sentry, SentrySeverity } from 'react-native-sentry';

export class Logger {
  static debug(message: string): void {
    console.debug(message);
  }

  static info(message: string): void {
    console.info(message);

    Sentry.captureMessage(message, {
      level: SentrySeverity.Info
    });
  }

  static warn(message: string): void {
    console.warn(message);

    Sentry.captureMessage(message, {
      level: SentrySeverity.Warning
    });
  }

  static error(message: string, exception: Error): void {
    console.log(message, exception);

    Sentry.captureException(exception);
  }
}

export default Logger;

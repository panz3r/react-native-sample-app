import React from 'react';

import hoistNonReactStatic from 'hoist-non-react-statics';

import { translate, type TranslateFn } from './i18n';

export const withT = WrappedComponent => {
  class Enhanced extends React.PureComponent {
    render() {
      return <WrappedComponent t={translate} {...this.props} />;
    }
  }

  // Pass over static props
  hoistNonReactStatic(Enhanced, WrappedComponent);

  return Enhanced;
};

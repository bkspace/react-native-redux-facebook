import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

const authEnhancer = (AuthenticatedComponent) => class Composed extends Component {
  authenticationCheck(authToken) {
    if (!authToken) {
      Actions.auth();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.authenticationCheck(nextProps.authToken);
  }

  render() {
    return (
      <AuthenticatedComponent {...this.props} />
    );
  }
};

export default authEnhancer;

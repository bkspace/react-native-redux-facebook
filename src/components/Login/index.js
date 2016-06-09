import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
import Button from '../Button';
import Notification from '../Notification';
import Spinner from '../Spinner';

class Login extends Component {
  componentWillMount() {
    this.authCheck(this.props.authToken);
  }

  componentWillReceiveProps(nextProps) {
    this.authCheck(nextProps.authToken);
  }

  authCheck(authToken) {
    if (authToken) {
      Actions.dash();
    }
  }

  renderError() {
    if (this.props.authError) {
      return (
        <Notification errorMessage={this.props.authError} />
      );
    }

    return null;
  }

  renderLoginButton() {
    if (!this.props.authenticating && !this.props.authToken) {
      return (
        <Button onButtonPressed={this.props.onLoginPressed} buttonText={'Login with Facebook'} />
      );
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>{this.props.welcomeText || 'Hello'}</Text>
        {this.renderLoginButton()}
        <Spinner isVisible={this.props.authenticating} />
        {!this.props.authenticating && this.renderError()}
      </View>
    );
  }
}

Login.propTypes = {
  welcomeText: PropTypes.string,
  authenticating: PropTypes.bool.isRequired,
  authToken: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  authError: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  onLoginPressed: PropTypes.func.isRequired,
};

export default Login;

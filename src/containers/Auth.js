import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { facebookLogin } from '../actions/auth';
import Login from '../components/Login';

class AuthContainer extends Component {
  onLoginPressed() {
    this.props.actions.facebookLogin();
  }

  render() {
    return (
      <Login {...this.props} onLoginPressed={this.onLoginPressed.bind(this)} />
    );
  }
}

AuthContainer.propTypes = {
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
  actions: PropTypes.shape({
    facebookLogin: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    authenticating: state.auth.authenticating,
    authToken: state.auth.authToken,
    authError: state.auth.authError,
    welcomeText: state.auth.welcomeText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ facebookLogin }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);

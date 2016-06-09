import React, { Component, PropTypes } from 'react';
import Spinner from 'react-native-spinkit';
import styles from './styles';

class Login extends Component {
  render() {
    return (
      <Spinner
        style={styles.spinner}
        isVisible={this.props.isVisible}
        size={45}
        type={'CircleFlip'}
        color={'#8e44ad'}
      />
    );
  }
}

Login.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

export default Login;

import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import styles from './styles';

class Notification extends Component {
  render() {
    return (
      <Text
        style={styles.text}
      >
        {this.props.errorMessage}
      </Text>
    );
  }
}

Notification.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default Notification;

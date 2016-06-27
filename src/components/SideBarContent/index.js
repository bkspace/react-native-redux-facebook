import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import SideBarNav from '../SideBarNav';

class SideBarContent extends Component {
  onLogoutPressed() {
    this.props.actions.logout();
  }

  render() {
    if (!this.props.authToken) {
      return (
        <Text />
      );
    }
    return (
      <View style={styles.contentContainer}>
        <SideBarNav
          {...this.props}
        />
      </View>
    );
  }
}

SideBarContent.propTypes = {
  authToken: PropTypes.string,
  facebookProfile: PropTypes.object,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired,
  }).isRequired,
};

export default SideBarContent;

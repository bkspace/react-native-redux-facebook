import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';

import styles from './styles';

class SideBarTopBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={{ uri: this.props.facebookProfile.picture.data.url }}
          />
      </View>
    );
  }
}

SideBarTopBar.propTypes = {
  facebookProfile: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.object,
  }),
  onLogoutPressed: PropTypes.func.isRequired,
};

export default SideBarTopBar;

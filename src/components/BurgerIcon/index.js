import React, { Component, PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class BurgerIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.context.drawer.open} style={styles.burgerButton}>
        <Icon name="bars" style={styles.burgerIcon}/>
      </TouchableOpacity>
    );
  }
}

BurgerIcon.contextTypes = {
  drawer: PropTypes.object.isRequired,
};

export default BurgerIcon;

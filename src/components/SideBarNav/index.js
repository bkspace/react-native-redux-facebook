import React, { Component, PropTypes } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class SideBarNav extends Component {
  handleNavClick(item) {
    if (item.name === 'auth') {
      this.props.actions.logout();
      return;
    }
    this.context.drawer.close();
    Actions[item.name]();
  }

  renderNavItem(item) {
    return (
      <TouchableOpacity
        onPress={this.handleNavClick.bind(this, item)}
        style={styles.navRow}
        key={item.name}
      >
        <Icon name={item.icon} style={styles.navIcon}/>
      </TouchableOpacity>
    );
  }

  renderNavItems(items) {
    return items.map(item => this.renderNavItem(item));
  }

  render() {
    const navigationLinks = [
      {
        name: 'spaces',
        icon: 'cloud',
      }, {
        name: 'comment',
        icon: 'comment',
      }, {
        name: 'auth',
        icon: 'power-off',
      },
    ];
    return (
      <View style={styles.container}>
        {this.renderNavItems(navigationLinks)}
      </View>
    );
  }
}

SideBarNav.propTypes = {
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired,
  }).isRequired,
};

SideBarNav.contextTypes = {
  drawer: PropTypes.object.isRequired,
};

export default SideBarNav;

import React, { Component, PropTypes } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer } from 'react-native-router-flux';
import SideBarContent from '../SideBarContent';
import styles from './styles';

class SideBar extends Component {
  render() {
    const children = this.props.navigationState.children;
    return (
      <Drawer
        ref="navigation"
        type="displace"
        styles={styles}
        content={<SideBarContent {...this.props} />}
        tapToClose={true}
        openDrawerOffset={0.7}
        panCloseMask={0.7}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}>
          <DefaultRenderer navigationState={children[0]}
            onNavigate={this.props.onNavigate}
          />
      </Drawer>
    );
  }
}

SideBar.propTypes = {
  navigationState: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default SideBar;

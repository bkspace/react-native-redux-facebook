import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import SideBar from '../components/SideBar';

class SideBarContainer extends Component {
  render() {
    return (
      <SideBar {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    facebookProfile: state.auth.facebookProfile,
    authToken: state.auth.authToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ logout }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);

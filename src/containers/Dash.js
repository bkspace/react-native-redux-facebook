import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dash from '../components/Dash';
import authEnhancer from '../components/Auth';

class DashContainer extends Component {
  render() {
    return (
      <Dash {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    facebookProfile: state.auth.facebookProfile,
    authToken: state.auth.authToken,
  };
}

export default connect(mapStateToProps)(authEnhancer(DashContainer));

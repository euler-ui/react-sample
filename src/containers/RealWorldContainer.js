import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RealWord from 'components/home/realworld';
import * as buildActions from 'redux/module/build';
import * as buildsActions from 'redux/module/builds';

const RealWorldContainer = props => {
  return <RealWord {...props} />;
};

const mapStateToProps = state => {
  return {
    builds: state.builds,
    build: state.build,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...buildActions, ...buildsActions }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealWorldContainer);

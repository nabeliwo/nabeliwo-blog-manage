import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagePage from '../../components/ManagePage';


class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ManagePage />;
  }
}

About.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);

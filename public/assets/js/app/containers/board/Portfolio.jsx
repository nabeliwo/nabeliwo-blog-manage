import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ManagePage from '../../components/ManagePage';


class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ManagePage />;
  }
}

Portfolio.propTypes = {

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
)(Portfolio);

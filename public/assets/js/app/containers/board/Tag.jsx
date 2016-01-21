import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaxonomyList from '../../components/TaxonomyList';


class Tag extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TaxonomyList taxonomy="タグ" />;
  }
}

Tag.propTypes = {

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
)(Tag);

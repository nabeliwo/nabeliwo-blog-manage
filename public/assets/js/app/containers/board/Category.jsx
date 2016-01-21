import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaxonomyList from '../../components/TaxonomyList';


class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <TaxonomyList taxonomy="カテゴリー" />;
  }
}

Category.propTypes = {

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
)(Category);

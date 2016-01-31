import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeManagePostTab, toggleManagePostTabVisible } from '../../actions/';

class ManagePost extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>hoge</div>
    );
  }
}

ManagePost.propTypes = {
  managePostTab: PropTypes.object.isRequired,
  changeManagePostTab: PropTypes.func.isRequired,
  toggleManagePostTabVisible: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    managePostTab: state.managePostTab
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeManagePostTab,
    toggleManagePostTabVisible
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePost);

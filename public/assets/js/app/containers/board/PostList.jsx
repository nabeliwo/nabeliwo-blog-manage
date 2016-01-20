import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class PostList extends Component {
  render() {
    return (
      <div>
        <p className="board__title">記事の管理</p>
        <div className="u-cf">
          <div className="p-PostList__sort u-fr">
            <select className="p-PostList__sort__select">
              <option value="diary">Diary(2)</option>
              <option value="web">Web(2)</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

PostList.propTypes = {

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
)(PostList);

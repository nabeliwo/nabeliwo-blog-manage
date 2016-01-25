import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMenuVisible } from '../actions/';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';


class App extends Component {
  constructor(props) {
    super(props);
    this.onMenuBtnClick = this.onMenuBtnClick.bind(this);
  }

  onMenuBtnClick() {
    this.props.toggleMenuVisible(this.props.menuVisible);
  }

  render() {
    return (
      <div>
        <Header onMenuBtnClick={this.onMenuBtnClick}
                menuVisible={this.props.menuVisible}
                pages={this.props.pages} />

        <Sidebar pages={this.props.pages} />

        <div id="board">
          <div className="board__inner">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  pages: PropTypes.array.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  toggleMenuVisible: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    pages: state.pages,
    menuVisible: state.menuVisible
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleMenuVisible
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

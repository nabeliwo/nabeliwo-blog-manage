import React, { Component, PropTypes } from 'react';

export default class TabIcon extends Component {
  constructor(props) {
    super(props);
    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick(e) {
    this.props.changeManagePostTab(this.props.name);
  }

  render() {
    let clazz = `c-icon c-icon--${this.props.name} `;

    clazz += this.props.activeClass || '';

    return (
      <div className="c-btnWrap" onClick={this.onTabClick}>
        <i className={clazz}></i>
      </div>
    );
  }
}

TabIcon.propTypes = {
  activeClass: PropTypes.string,
  name: PropTypes.string.isRequired,
  changeManagePostTab: PropTypes.func.isRequired
};

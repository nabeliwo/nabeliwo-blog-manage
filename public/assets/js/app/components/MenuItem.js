import React, { Component, PropTypes } from 'react';

export default class SidebarItem extends Component {
  render() {
    const { children, url, clazz } = this.props;

    return (
      <li className={(location.pathname === url) ? 'is-active' : ''}>
        <a className={clazz} href={url} onClick={this.props.handleHistory}>{children}</a>
      </li>
    );
  }
}

SidebarItem.propTypes = {
  handleHistory: PropTypes.func.isRequired,
  clazz: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SidebarItem extends Component {
  render() {
    const { children, url, clazz } = this.props;

    return (
      <li className={(location.pathname === url) ? 'is-active' : ''}>
        <Link className={clazz} to={url}>{children}</Link>
      </li>
    );
  }
}

SidebarItem.propTypes = {
  clazz: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

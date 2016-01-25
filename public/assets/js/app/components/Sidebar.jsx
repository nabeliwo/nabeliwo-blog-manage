import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import MenuItem from './MenuItem';

export default class Sidebar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <ul className="sidebar__items">
          {this.props.pages.map((page, i) =>
            <MenuItem key={i}
                      clazz={'sidebar__link'}
                      url={page.url}>
              {page.name}
            </MenuItem>
          )}
        </ul>
      </nav>
    );
  }
}

Sidebar.propTypes = {
  pages: PropTypes.array.isRequired
};

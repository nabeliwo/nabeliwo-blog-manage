import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class Sidebar extends Component {
  render() {
    const { handleHistory, pages } = this.props;

    return (
      <nav id="sidebar">
        <ul className="sidebar__items">
          {pages.map((page, i) =>
            <MenuItem key={i}
                      handleHistory={handleHistory}
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
  handleHistory: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
};

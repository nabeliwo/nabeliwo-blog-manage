import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import MenuItem from './MenuItem';

export default class Header extends Component {
  renderMenu() {
    const { menuVisible, pages } = this.props;

    if (menuVisible) {
      return (
        <ul id="menu" className="header__menu">
          {pages.map((page, i) =>
            <MenuItem key={i}
                      clazz={'menu__link'}
                      url={page.url}>
              {page.name}
            </MenuItem>
          )}
          <li><a className="menu__link" href="/logout/">ログアウト</a></li>
        </ul>
      );
    }
  }

  render() {
    return (
      <header id="header" className="u-cf">
        <div className="u-fl">
          <a className="header__title c-title u-hover" href="http://nabeliwo.me/" target="_blank">nabeliwo blog</a>
        </div>

        <div className="header__user u-fr">
          <p className="header__user__name u-hover" onClick={this.props.onMenuBtnClick}>nabeliwo</p>
          {this.renderMenu()}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  onMenuBtnClick: PropTypes.func.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired
};

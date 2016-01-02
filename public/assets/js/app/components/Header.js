import React, { Component, PropTypes } from 'react';
import MenuItem from './MenuItem';

export default class Header extends Component {
  renderMenu() {
    const { menuVisible, pages, handleHistory } = this.props;

    if (menuVisible) {
      return (
        <ul id="menu" className="header__menu">
          {pages.map((page, i) =>
            <MenuItem key={i}
                      handleHistory={handleHistory}
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
    const { handleHistory, onMenuBtnClick } = this.props;

    return (
      <header id="header" className="u-cf">
        <div className="u-fl">
          <a className="header__title c-title u-hover" href="/" onClick={handleHistory}>nabeliwo blog</a>
        </div>

        <div className="header__user u-fr">
          <p className="header__user__name u-hover" onClick={onMenuBtnClick}>nabeliwo</p>
          {this.renderMenu()}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  handleHistory: PropTypes.func.isRequire,
  onMenuBtnClick: PropTypes.func.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  pages: PropTypes.array.isRequired
};

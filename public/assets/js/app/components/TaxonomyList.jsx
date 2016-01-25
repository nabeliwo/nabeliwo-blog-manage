import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class TaxonomyList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { taxonomy } = this.props;

    return (
      <div>
        <p className="board__title">{taxonomy}</p>

        <div className="p-taxonomy__top u-cf">
          <div className="p-taxonomy__sort u-fr">
            <form className="p-taxonomy__search">
              <div className="p-taxonomy__search__txt">
                <input type="text" className="c-input c-input--middle" placeholder={`${taxonomy}を検索`} />
              </div>
              <div className="p-taxonomy__search__btn c-btn c-btn--default u-hover">検索</div>
            </form>
          </div>
        </div>

        <div className="p-taxonomy__check u-cf">
          <div className="u-fl">
            <div className="p-taxonomy__check__btn c-btn c-btn--default u-hover">{taxonomy}を新規追加</div>
          </div>
          <div className="u-fr">
            <div className="p-taxonomy__check__btn c-btn c-btn--alert u-hover">チェックした{taxonomy}を削除</div>
          </div>
        </div>

        <table className="p-taxonomy__table c-table">
          <thead>
            <tr>
              <td>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt"></span>
                </label>
              </td>
              <td>名前</td>
              <td>スラッグ</td>
              <td>記事数</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt"></span>
                </label>
              </td>
              <td>Diary</td>
              <td>diary</td>
              <td>3</td>
              <td>
                <div className="p-taxonomy__check__btn c-btn c-btn--alert u-hover">削除</div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt"></span>
                </label>
              </td>
              <td>Web</td>
              <td>web</td>
              <td>3</td>
              <td>
                <div className="p-taxonomy__check__btn c-btn c-btn--alert u-hover">削除</div>
              </td>
            </tr>
            <tr>
              <td>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt"></span>
                </label>
              </td>
              <td>Game</td>
              <td>game</td>
              <td>3</td>
              <td>
                <div className="p-taxonomy__check__btn c-btn c-btn--alert u-hover">削除</div>
              </td>
            </tr>
          </tbody>
        </table>

        <ul className="c-pager">
          <li><span className="c-pager__item">PAGE 3 of 15</span></li>
          <li><a className="c-pager__item is-link" href="">＜ FIRST</a></li>
          <li><a className="c-pager__item is-link" href="">＜ PREV</a></li>
          <li><span className="c-pager__item">...</span></li>
          <li><a className="c-pager__item is-link" href="">2</a></li>
          <li><span className="c-pager__item is-current">3</span></li>
          <li><a className="c-pager__item is-link" href="">4</a></li>
          <li><span className="c-pager__item">...</span></li>
          <li><a className="c-pager__item is-link" href="">NEXT ＞</a></li>
          <li><a className="c-pager__item is-link" href="">LAST ＞</a></li>
        </ul>
      </div>
    );
  }
}

TaxonomyList.propTypes = {
  taxonomy: PropTypes.string.isRequired
};

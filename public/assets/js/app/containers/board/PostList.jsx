import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class PostList extends Component {
  render() {
    return (
      <div>
        <p className="board__title">記事の管理</p>

        <div className="u-cf">
          <div className="p-postList__sort u-fr">
            <div className="c-select c-select--small c-select--default">
              <select className="c-select__inner">
                <option value="all">Category</option>
                <option value="diary">Diary(2)</option>
                <option value="web">Web(2)</option>
              </select>
            </div>

            <form className="p-postList__search">
              <div className="p-postList__search__txt">
                <input type="text" className="c-input c-input--middle" placeholder="記事を検索"/>
              </div>
              <div className="p-postList__search__btn c-btn c-btn--default u-hover">検索</div>
            </form>
          </div>
        </div>

        <ul className="p-postList__tab">
          <li><a className="p-postList__tab__link is-active" href="">公開</a></li>
          <li><a className="p-postList__tab__link" href="">下書き</a></li>
          <li><a className="p-postList__tab__link" href="">すべて</a></li>
        </ul>

        <div className="p-postList__check u-cf">
          <div className="u-fl">
            <div className="c-select c-select--small c-select--default">
              <select className="c-select__inner">
                <option value="">チェックした記事にカテゴリーを追加</option>
                <option value="diary">Diary(2)</option>
                <option value="web">Web(2)</option>
              </select>
            </div>
          </div>
          <div className="u-fr">
            <div className="p-postList__check__btn c-btn c-btn--alert u-hover">チェックした記事を削除</div>
          </div>
        </div>

        <table className="c-table">
          <thead>
            <tr>
              <td>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt"></span>
                </label>
              </td>
              <td>タイトル</td>
              <td>カテゴリー</td>
              <td>タグ</td>
              <td>作成者</td>
              <td>日時</td>
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
            <td><a className="c-table__link" href="">【スプラトゥーンプレイ日記4】2016年イカがんばる</a></td>
            <td>
              <span>Diary</span>
              <span>Web</span>
            </td>
            <td>
              <span>WiiU</span>
              <span>splatoon</span>
            </td>
            <td>nabeliwo</td>
            <td>2016/1/20 23:19:07</td>
            <td>
              <a className="u-hover" href="">
                <i className="c-icon c-icon--link"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <label className="c-checkBox c-checkBox--small">
                <input className="c-checkBox__check" type="checkbox"/>
                <span className="c-checkBox__txt"></span>
              </label>
            </td>
            <td><a className="c-table__link" href="">【スプラトゥーンプレイ日記4】2016年イカがんばる</a></td>
            <td>
              <span>Diary</span>
              <span>Web</span>
            </td>
            <td>
              <span>WiiU</span>
              <span>splatoon</span>
            </td>
            <td>nabeliwo</td>
            <td>2016/1/20 23:19:07</td>
            <td>
              <a className="u-hover" href="">
                <i className="c-icon c-icon--link"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <label className="c-checkBox c-checkBox--small">
                <input className="c-checkBox__check" type="checkbox"/>
                <span className="c-checkBox__txt"></span>
              </label>
            </td>
            <td><a className="c-table__link" href="">【スプラトゥーンプレイ日記4】2016年イカがんばる</a></td>
            <td>
              <span>Diary</span>
              <span>Web</span>
            </td>
            <td>
              <span>WiiU</span>
              <span>splatoon</span>
            </td>
            <td>nabeliwo</td>
            <td>2016/1/20 23:19:07</td>
            <td>
              <a className="u-hover" href="">
                <i className="c-icon c-icon--link"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <label className="c-checkBox c-checkBox--small">
                <input className="c-checkBox__check" type="checkbox"/>
                <span className="c-checkBox__txt"></span>
              </label>
            </td>
            <td><a className="c-table__link" href="">【スプラトゥーンプレイ日記4】2016年イカがんばる</a></td>
            <td>
              <span>Diary</span>
              <span>Web</span>
            </td>
            <td>
              <span>WiiU</span>
              <span>splatoon</span>
            </td>
            <td>nabeliwo</td>
            <td>2016/1/20 23:19:07</td>
            <td>
              <a className="u-hover" href="">
                <i className="c-icon c-icon--link"></i>
              </a>
            </td>
          </tr>
          </tbody>
        </table>
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

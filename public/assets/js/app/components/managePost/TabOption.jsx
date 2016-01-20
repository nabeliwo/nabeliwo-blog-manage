import React, { Component, PropTypes } from 'react';

export default class TabOption extends Component {
  render() {
    return (
      <div>
        <p>編集オプション</p>

        <div className="p-postTab">
          <div className="p-postTab__box">
            <p className="p-postTab__headline">編集ステータス</p>

            <p>：<span>未投稿</span></p>
          </div>

          <div className="p-postTab__box">
            <p className="p-postTab__headline">投稿日時</p>

            <ul className="p-postTab__date">
              <li><input className="c-input c-input--middle" type="text" placeholder="2015-12-19" /></li>
              <li><input className="c-input c-input--middle" type="text" placeholder="00:00" /></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TabOption.propTypes = {

};

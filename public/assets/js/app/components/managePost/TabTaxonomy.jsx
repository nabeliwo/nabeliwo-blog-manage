import React, { Component, PropTypes } from 'react';

export default class TabCategory extends Component {
  render() {
    const { name } = this.props;

    return (
      <div>
        <p>{name}</p>

        <div className="p-postTab">
          <div className="p-postTab__box">
            <p className="p-postTab__headline">{name}選択（複数選択可）</p>

            <ul className="p-postTab__check">
              <li>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt">Web</span>
                </label>
              </li>
              <li>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt">Music</span>
                </label>
              </li>
              <li>
                <label className="c-checkBox c-checkBox--small">
                  <input className="c-checkBox__check" type="checkbox"/>
                  <span className="c-checkBox__txt">Diary</span>
                </label>
              </li>
            </ul>
          </div>

          <div className="p-postTab__box">
            <p className="p-postTab__headline">新規{name}を追加</p>

            <input className="c-input c-input--middle" type="text" />
          </div>
        </div>
      </div>
    );
  }
}

TabCategory.propTypes = {
  name: PropTypes.string.isRequired
};

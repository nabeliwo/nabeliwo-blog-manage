import React, { Component, PropTypes } from 'react';

export default class TabImage extends Component {
  render() {
    return (
      <div>
        <p>画像を投稿</p>

        <div className="p-postTab">
          <div className="p-postTab__box">
            <div className="p-postTab__file">
              <span>ファイルを選択</span>
              <input className="p-postTab__file__input" type="file" />
            </div>
          </div>

          <div className="p-postTab__box">
            <div className="p-postTab__gallery">
              <ul className="p-postTab__gallery__items">
                <li><img className="p-postTab__gallery__thumb" src="/assets/charlie01.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb is-active" src="/assets/asuna.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/zelda_wall.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/asuna.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/zelda_wall.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/charlie01.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/asuna.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/zelda_wall.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/asuna.jpg" width="100%" height="auto" alt=""/></li>
                <li><img className="p-postTab__gallery__thumb" src="/assets/zelda_wall.jpg" width="100%" height="auto" alt=""/></li>
              </ul>
            </div>
          </div>

          <div className="p-postTab__box">
            <div className="p-postTab__select">
              <div className="p-postTab__select__btn c-btn c-btn--middle c-btn--default u-hover">アイキャッチに設定</div>
              <div className="p-postTab__select__btn c-btn c-btn--middle c-btn--default u-hover">投稿に貼り付け</div>
            </div>
          </div>

          <div className="p-postTab__box">
            <p className="p-postTab__headline">アイキャッチ</p>

            <p className="p-postTab__desc">アイキャッチが設定されていません。</p>
          </div>
        </div>
      </div>
    );
  }
}

TabImage.propTypes = {

};

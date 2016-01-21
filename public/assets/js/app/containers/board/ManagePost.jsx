import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeManagePostTab, toggleManagePostTabVisible } from '../../actions/';

import TabOption from '../../components/managePost/TabOption';
import TabTaxonomy from '../../components/managePost/TabTaxonomy';
import TabImage from '../../components/managePost/TabImage';
import TabIcon from '../../components/managePost/TabIcon';

class ManagePost extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }

  renderTabMenu() {
    switch (this.props.managePostTab.current) {
    case 'option':
      return <TabOption />;

    case 'category':
      return <TabTaxonomy name="カテゴリー" />;

    case 'tag':
      return <TabTaxonomy name="タグ" />;

    case 'image':
      return <TabImage />;

    default:
      return <TabOption />;
    }
  }

  render() {
    const { managePostTab, changeManagePostTab, toggleManagePostTabVisible } = this.props;

    return (
      <form className="p-managePost" onSubmit={this.handleSubmit}>
        <div className="p-managePost__main">
          <p className="board__title">新規投稿を追加</p>

          <input type="text" className="p-managePost__title c-input c-input--middle u-fsll" placeholder="タイトル"/>

          <div className="p-managePost__post">
            <textarea className="p-managePost__post__input c-input c-input--large" placeholder="Let's enjoy blog :)"></textarea>

            <div className="p-managePost__post__count">
              <p><span>0</span>文字</p>
            </div>

            <ul className="p-managePost__post__btns">
              <li><a className="c-btn c-btn--middle c-btn--default u-hover" href="">公開する</a></li>
              <li><a className="c-btn c-btn--middle c-btn--off u-hover" href="">下書き保存する</a></li>
            </ul>
          </div>
        </div>

        <div className={(managePostTab.isVisible) ? 'p-managePost__side is-visible' : 'p-managePost__side'}>
          <div className="p-managePost__side__icons">
            <div className="c-btnWrap is-bg--off" onClick={toggleManagePostTabVisible}>
              <i className={(managePostTab.isVisible) ? 'c-icon c-icon--arrow-left' : 'c-icon c-icon--arrow-left is-close'}></i>
            </div>

            <ul>
              {managePostTab.tabs.map((tab, i) =>
                <li key={i}>
                  <TabIcon name={tab}
                           activeClass={(tab === managePostTab.current) ? 'is-active' : ''}
                           changeManagePostTab={changeManagePostTab} />
                </li>
              )}
            </ul>
          </div>

          <div className="p-managePost__side__contents">
            {this.renderTabMenu()}
          </div>
        </div>
      </form>
    );
  }
}

ManagePost.propTypes = {
  managePostTab: PropTypes.object.isRequired,
  changeManagePostTab: PropTypes.func.isRequired,
  toggleManagePostTabVisible: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    managePostTab: state.managePostTab
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeManagePostTab,
    toggleManagePostTabVisible
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePost);

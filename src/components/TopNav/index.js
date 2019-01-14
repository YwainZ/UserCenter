import React from "react";
import s from "./index.css";
import PropsType from "prop-types";
import nav from "../../assets/nav.png";

class TopNav extends React.Component {
  static propsType = {
    showNav: PropsType.func.isRequired
  };

  handleCilck = e => {
    const { showNav } = this.props;
    if (e.target === e.currentTarget) {
      showNav();
    }
  };

  render() {
    return (
      <div className={s.container}>
        <img src={nav} onClick={this.handleCilck} />
        <p>用户中心</p>
        <p>项目注册</p>
        <p>获取密钥</p>
        <p>设置全局密钥</p>
      </div>
    );
  }
}

export default TopNav;

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
        <a href="/">
          <p>用户中心</p>
        </a>
      </div>
    );
  }
}

export default TopNav;

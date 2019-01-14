import React from "react";
import Layout from "../../components/layout";
import logo_notext from "../../assets/logo_notext.png";
import users from "../../assets/users.png";
import s from "./index.css";

const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9];
class Home extends React.Component {
  // 渲染单个项目框
  renderProjectItem = () => {
    return <div className={s.projectItem} />;
  };

  render() {
    return (
      <div className={s.container}>
        <Layout />
        <div className={s.search}>
          <img src={logo_notext} alt="logo" />
          <img src={users} alt="user" />
        </div>
        <div className={s.wrap}>
          <div className={s.wrapTitle}>UserCenter的应用项目</div>
          {projects.map(item => this.renderProjectItem())}
        </div>
      </div>
    );
  }
}

export default Home;

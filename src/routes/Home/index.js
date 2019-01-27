import React from "react";
import Layout from "../../components/Layout";
import logo_notext from "../../assets/logo_notext.png";
import indexUsers from "../../assets/indexUsers.png";
import { getAllProject } from "../../config/config.js";
import s from "./index.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  async componentDidMount() {
    const res = await getAllProject();
    this.setState({
      projects: res.data
    });
  }

  // 渲染单个项目框
  renderProjectItem = (item, idx) => {
    return (
      <div className={s.projectItem} key={`item${idx}`}>
        <p>{item.name}</p>
        <p>{item.createTime}</p>
      </div>
    );
  };

  render() {
    const { projects } = this.state;
    return (
      <div className={s.container}>
        <Layout />
        <div className={s.search}>
          <img src={logo_notext} alt="logo" />
          <img src={indexUsers} alt="user" />
        </div>
        <div className={s.wrap}>
          <div className={s.wrapTitle}>UserCenter的应用项目</div>
          {projects &&
            projects.map((item, idx) => this.renderProjectItem(item, idx))}
        </div>
      </div>
    );
  }
}

export default Home;

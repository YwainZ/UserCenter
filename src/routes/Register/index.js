import React from "react";
import Layout from "../../components/Layout";
import PlainForm from "../../components/PlainForm";
import { formList, registerIntro } from "../../config/constant";
import { registerPorject } from "../../config/config";
import s from "./index.css";

class Register extends React.Component {
  async handleRegister(data) {
    const { name, phone } = data;
    if (!name || !phone) {
      window.confirm("提交不能为空");
    } else {
      const res = await registerPorject(data);
      window.confirm(res.msg);
    }
  }

  render() {
    return (
      <div className={s.container}>
        <Layout />
        <PlainForm
          formName={"项目注册"}
          formList={formList}
          handleConfirm={data => {
            this.handleRegister(data);
          }}
          introduce={registerIntro}
        />
      </div>
    );
  }
}

export default Register;

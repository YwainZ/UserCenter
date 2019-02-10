import React from "react";
import PlainForm from "../../components/PlainForm";
import Layout from "../../components/Layout";
import { setKeyList, setKeyIntro } from "../../config/constant";
import s from "./index.css";

class SetKey extends React.Component {
  setkey(data) {
    const { projectId, key } = data;
    if (!projectId || !key) {
      window.confirm("提交不能为空");
    } else {
      localStorage.setItem("projectId", projectId);
      localStorage.setItem("key", key);
      if (window.confirm("设置成功")) {
        window.location = "/";
      }
    }
  }

  render() {
    return (
      <div className={s.container}>
        <Layout />
        <PlainForm
          formName="设置全局密钥"
          formList={setKeyList}
          introduce={setKeyIntro}
          handleConfirm={data => {
            this.setkey(data);
          }}
        />
      </div>
    );
  }
}

export default SetKey;

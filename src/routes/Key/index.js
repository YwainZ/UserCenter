import React from "react";
import Layout from "../../components/Layout";
import PlainForm from "../../components/PlainForm";
import { formList, keyIntro } from "../../config/constant";
import { getProjectKey } from "../../config/config";
import s from "./index.css";

class Key extends React.Component {
  async getKey(data) {
    const { name, phone } = data;
    if (!name || !phone) {
      window.confirm("提交不能为空");
    } else {
      const res = await getProjectKey(data);
      if (res.success) {
        window.confirm("项目ID:" + res.data.projectId + "密钥:" + res.data.key);
      }
    }
  }

  render() {
    return (
      <div className={s.container}>
        <Layout />
        <PlainForm
          formName={"获取项目密钥"}
          formList={formList}
          handleConfirm={data => {
            this.getKey(data);
          }}
          introduce={keyIntro}
        />
      </div>
    );
  }
}

export default Key;

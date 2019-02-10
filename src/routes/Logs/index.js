import React from "react";
import Layout from "../../components/Layout";
import Confirm from "../../components/Confirm";
import { getLogs } from "../../config/config";
import s from "./index.css";

const infos = ["日志信息", "错误信息", "警告信息"];
const projectId = localStorage.getItem("projectId");
const key = localStorage.getItem("key");

class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: true,
      selectedIndx: 0,
      errorList: [],
      infoList: [],
      warnList: [],
      msg: ""
    };
  }

  async componentWillMount() {
    const res = await getLogs();
    if (res.success) {
      this.setState({
        errorList: res.data.ERROR,
        infoList: res.data.INFO,
        warnList: res.data.WARN
      });
    } else {
      this.setState({
        msg: res.msg
      });
    }
  }

  handleSelect = idx => {
    this.setState({
      selectedIndx: idx,
      isSelect: true
    });
  };

  getList = () => {
    const { errorList, infoList, warnList, selectedIndx } = this.state;
    switch (selectedIndx) {
      case 0:
        return infoList;
      case 1:
        return errorList;
      case 2:
        return warnList;
      default:
        return infoList;
    }
  };

  render() {
    const { isSelect, selectedIndx, msg } = this.state;
    return (
      <div className={s.container}>
        {!projectId || !key ? (
          <Confirm
            title="提示"
            tips={"请设置全局密钥后查看"}
            confirmText="马上设置"
          />
        ) : msg ? (
          <Confirm title="提示" tips={msg} confirmText="重新设置" />
        ) : null}
        <Layout />
        <div className={s.tabs}>
          <div className={s.title}>
            {infos.map((info, idx) => (
              <div
                className={isSelect && selectedIndx === idx ? s.selected : ""}
                onClick={() => this.handleSelect(idx)}
                key={idx}
              >
                {info}
              </div>
            ))}
          </div>
          <div className={s.content}>
            <div className={s.contentTitle}>
              <p>ID</p>
              <p>数量</p>
              <p>日志时间</p>
            </div>
            {this.getList() && this.getList().length > 0 ? (
              this.getList().map(item => (
                <div key={item.id}>
                  <p>{item.content}</p>
                  <p>{item.count}</p>
                  <p>{item.updateTime}</p>
                </div>
              ))
            ) : (
              <div className={s.noInfo}> 暂无日志信息</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Log;

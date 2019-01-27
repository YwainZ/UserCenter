import React from "react";
import Layout from "../../components/Layout";
import { getLogs } from "../../config/config";
import s from "./index.css";

const infos = ["Error", "Info", "Warn"];
class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelect: true,
      selectedIndx: 0,
      errorList: [],
      infoList: [],
      warnList: []
    };
  }

  async componentDidMount() {
    const res = await getLogs();
    if (res.success) {
      this.setState({
        errorList: res.data.ERROR,
        infoList: res.data.INFO,
        warnList: res.data.WARN
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
        return errorList;
      case 1:
        return infoList;
      case 2:
        return warnList;
      default:
        return errorList;
    }
  };

  render() {
    const { isSelect, selectedIndx } = this.state;
    return (
      <div className={s.container}>
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
            {this.getList() && this.getList().length > 0 ? (
              this.getList().map(item => (
                <div key={item.id}>
                  <p>{item.content}</p>
                  <p>{item.count}</p>
                  <p>{item.createTime}</p>
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

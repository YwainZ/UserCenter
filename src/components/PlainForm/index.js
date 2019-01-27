import React from "react";
import PropsType from "prop-types";
import logo from "../../assets/logo.png";
import logo_notext from "../../assets/logo_notext.png";
import users from "../../assets/users.png";
import s from "./index.css";

class PlainFrom extends React.Component {
  static propsType = {
    formList: PropsType.array.isRequired,
    formName: PropsType.string.isRequired,
    handleConfirm: PropsType.func.isRequired, // todo: 表单校验部分
    introduce: PropsType.string.isRequired // 模块介绍
  };

  constructor(props) {
    super(props);
    this.state = {
      data: {} // 表单数据
    };
  }

  clearInfo = () => {
    const { formList } = this.props;
    formList.forEach(item => {
      this[item.key].value = "";
    });
  };

  confirm = () => {
    const { handleConfirm } = this.props;
    const { data } = this.state;
    const reg = /^1[34578]\d{9}$/g;
    const reg2 = new RegExp("[~'!@#￥$%^&*()-+_=:]");
    const { phone, projectId, name, key } = data;
    if (name && reg2.test(name)) {
      window.confirm("项目名称不能包含特殊字符");
    } else if (phone && !reg.test(phone)) {
      window.confirm("请输入正确的手机号");
    } else if (key && reg2.test(key)) {
      window.confirm("项目密钥不能包含特殊字符");
    } else if (projectId && !/\d/g.test(projectId)) {
      window.confirm("项目ID请输入数字");
    } else {
      handleConfirm(data);
    }
  };

  handleChange(key) {
    const { data } = this.state;
    if (this[key].value) {
      data[key] = this[key].value;
    }
  }

  render() {
    const { formList, formName, introduce } = this.props;
    return (
      <div className={s.container}>
        <div className={s.wrap}>
          <div className={s.top}>
            <img src={logo} alt="logo" className={s.logo} />
            <div className={s.title}>{formName || ""}</div>
          </div>
          <form>
            {formList &&
              formList.map((formItem, index) => (
                <div className={s.formItem} key={`form${index}`}>
                  <div>{`${formItem.label}:`}</div>
                  <input
                    type="text"
                    className={s.input}
                    ref={input => {
                      this[formItem.key] = input;
                    }}
                    onChange={() => this.handleChange(formItem.key)}
                  />
                </div>
              ))}
          </form>
          <input
            className={s.operation}
            type="submit"
            value="确&nbsp;定"
            onClick={this.confirm}
          />
        </div>
        <div className={s.right}>
          <img className={s.rightImg} src={users} />
          <p>{introduce}</p>
        </div>
      </div>
    );
  }
}

export default PlainFrom;

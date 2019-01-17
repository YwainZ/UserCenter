import React from 'react';
import PropsType from "prop-types";
import logo from '../../assets/logo.png';
import s from './index.css';

class PlainFrom extends React.Component {
    static propsType = {
        formList: PropsType.array.isRequired,
        formName: PropsType.string.isRequired,
        handleConfirm: PropsType.func.isRequired, // todo: 表单校验部分
    }

    constructor(props) {
      super(props);
      this.state = {
        data: {}, // 表单数据
      }
    }

    clearInfo = () => {
      const { formList } = this.props;
      formList.forEach(item  => {
        this[item.key].value = ''
      });
    }
    
    confirm = () => {
      const { handleConfirm } = this.props;
      const { data } = this.state;
      handleConfirm(data);
    }

    handleChange(key) {
      const { data } = this.state;
      if (this[key].value) {
        data[key] = this[key].value;
      }
    }

    render() {
      const { formList, formName } = this.props;
      return (
        <div className={s.container}>
      { /*<div className={s.title}>{ formName || '' }</div> */}
            <div className={s.wrap}>
              <img src={logo} alt="logo" className={s.logo}/>
              <span className={s.title}>{ formName || '' }</span>
            { 
              formList && formList.map(formItem =>
              <div className={s.formItem}>
                <div>{`${formItem.label}:`}</div>
                <input 
                  className={s.input}
                  ref={input => { this[formItem.key] = input }}
                  onChange={() => this.handleChange(formItem.key)}
                />
              </div>)
            }
            <span className={s.operation} onClick={this.confirm}>确&nbsp;定</span>
            </div>
        </div>
      )
    }
}

export default PlainFrom;
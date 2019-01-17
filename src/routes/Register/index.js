import React from 'react';
import Layout from '../../components/Layout';
import PlainForm from '../../components/PlainForm';
import { formList } from '../../config/constant';
import { registerPorject } from '../../config/config';
import s from './index.css';

class Register extends React.Component {

    async handleRegister(data) {
     const res = await registerPorject(data);
     console.log('res', res)
    }
  
    render() {
      return (
        <div className={s.container}>
          <Layout/>
          <PlainForm
            formName={'项目注册'}
            formList={formList}
            handleConfirm={(data) => {this.handleRegister(data)}}
          />
        </div>)
    }
}

export default Register;
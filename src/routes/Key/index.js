import React from 'react';
import Layout from '../../components/Layout';
import PlainForm from '../../components/PlainForm';
import { formList, keyIntro } from '../../config/constant';
import s from './index.css';

class Key extends React.Component {
    render() {
        return (
            <div className={s.container}>
              <Layout />
              <PlainForm
                formName={'获取项目密钥'}
                formList={formList}
                handleConfirm={(data) => {this.getKey(data)}}
                introduce={keyIntro}
              />
            </div>
        )
    }
}

export default Key;
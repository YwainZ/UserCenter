import React from 'react';
import PlainForm from '../../components/PlainForm';
import Layout from '../../components/Layout';
import { setKeyList, setKeyIntro } from '../../config/constant';
import s from './index.css';

class SetKey extends React.Component {
    render() {
      return (
        <div className={s.container}>
          <Layout />
          <PlainForm
            formName="设置全局密钥"
            formList={setKeyList}
            introduce={setKeyIntro}
          />
        </div>
        )
    }
}

export default SetKey;
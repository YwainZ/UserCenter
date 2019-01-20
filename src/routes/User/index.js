import React from 'react';
import Layout from '../../components/Layout';
import logo_notext from '../../assets/logo_notext.png';
import { getUserInfo } from '../../config/config';
import s from './index.css';
class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: []
        }
    }

    async componentDidMount() {
       const userInfo =  await getUserInfo({projectId: 2, key: 'ff1467c6a4'});
        this.setState({
            userInfo: userInfo.data
        })
    }

    render() {
        const { userInfo } = this.state
        return (
            <div className={s.container}>
              <Layout />
              <div className={s.wrap}>
               <img src={logo_notext} alt="logo" />
               <input />
               <div className={s.info}>
                 <div className={s.title}>
                    <p>用&nbsp;户&nbsp;ID</p>
                    <p>用&nbsp;户&nbsp;名</p>
                    <p>角&nbsp;色</p>
                    <p>创&nbsp;建&nbsp;时&nbsp;间</p>
                 </div>
                 {
                    userInfo && userInfo.map(info =>
                    <div className={s.userInfo} key={info.userId}>
                      <p>{info.userId}</p>
                      <p>{info.username}</p>
                      <p>{info.role || '无'}</p>
                      <p>{info.createTime}</p>
                    </div>)
                 }
               </div>
              </div>
            </div>
        )
    }
}

export default User;
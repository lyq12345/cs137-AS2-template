/*
 * @Author: lyq
 * @Date: 2021-01-26 16:33:21
 * @LastEditTime: 2021-02-07 16:39:07
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/pages/Welcome/index.tsx
 * @可以输入预定的版权声明、个性签名、空行等
 */
import React from 'react';
import styles from './welcome.less';
import Logo from '../../../public/logo.png';
import { Button } from 'antd';
import { history } from 'umi';

const Index = () => {
  return (
    <div className={styles['welcome-bkg']}>
      <div className={styles['center']}>
        <div className={styles['main-title']}>
          <img src={Logo} />
          <span>FabFlix</span>
        </div>
        <div className={styles['sub-title']}>
          <span>Want to buy movies?</span>
        </div>
        <div className={styles['buttons']}>
          <Button
            onClick={() => {
              history.push('./login');
            }}
          >
            Login
          </Button>
          <Button
            onClick={() => {
              history.push('./register');
            }}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

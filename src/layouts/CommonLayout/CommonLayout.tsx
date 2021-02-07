/*
 * @Author: lyq
 * @Date: 2021-01-26 17:53:52
 * @LastEditTime: 2021-02-07 13:46:27
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/layouts/CommonLayout/CommonLayout.tsx
 * @可以输入预定的版权声明、个性签名、空行等
 */
import React, { useState } from 'react';
import Logo from '../../../public/logo.png';
import styles from './CommonLayout.less';
import { loginContext } from './store';

const CommonLayout: React.FC = React.memo(({ children }) => {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className={styles['bg-container']}>
      <loginContext.Provider value={{ setLogin }}>
        <div className={styles['top-container']}>
          <div>
            <span>Home</span>
            {isLogin ? <span>Search</span> : null}
          </div>
          <img src={Logo} />
          {isLogin ? (
            <div>
              <span>My Orders</span>
              <span>My Cart</span>
              <span>Log Out</span>
            </div>
          ) : null}
        </div>
        <div className={styles['center-container']}>{children}</div>
      </loginContext.Provider>
    </div>
  );
});

export default CommonLayout;

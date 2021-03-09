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
import { LoginContext, UserProvider } from './store';
import { Link } from 'umi';

const CommonLayout: React.FC = React.memo(({ children }) => {
  const [isLogin, setLogin] = useState(false);

  return (
    <div className={styles['bg-container']}>
      <UserProvider>
        <LoginContext.Provider value={{ setLogin }}>
          {/* 顶部导航 */}
          <div className={styles['top-container']}>
            <div>
              <Link to="/Home">
                <span>Home</span>
              </Link>
              {isLogin ? (
                <Link to="/Search">
                  <span>Search</span>
                </Link>
              ) : null}
            </div>
            <img src={Logo} />
            {isLogin ? (
              <div>
                <Link to="/order">
                  <span>My Orders</span>
                </Link>
                <Link to="/cart">
                  <span>My Cart</span>
                </Link>
                <span>Log Out</span>
              </div>
            ) : null}
          </div>

          {/* 内容 */}
          <div className={styles['content-container']}>
            <div className={styles['content']}>
              <div className={styles['center']}>{children}</div>
              {/* {children} */}
            </div>
          </div>
        </LoginContext.Provider>
      </UserProvider>
    </div>
  );
});

export default CommonLayout;

/*
 * @Author: lyq
 * @Date: 2021-01-26 18:33:49
 * @LastEditTime: 2021-01-26 18:44:06
 * @LastEditors: lyq
 * @Description:
 * @FilePath: /cs122b-fe-temp/src/layouts/CommonLayout/store.tsx
 * @可以输入预定的版权声明、个性签名、空行等
 */
import React, { createContext, useState, useContext } from 'react';

export const LoginContext = createContext(null);
const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [session, sessionSetter] = useState(localStorage.getItem('session_id'));
  const [email, emailSetter] = useState(localStorage.getItem('email'));

  const setSession = (newSession) => {
    sessionSetter(newSession);
    localStorage.setItem('session_id', newSession);
  };

  const setEmail = (newEmail) => {
    emailSetter(newEmail);
    localStorage.setItem('email', newEmail);
  };

  const value = { session, setSession, email, setEmail };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const { session, setSession, email, setEmail } = useContext(UserContext);

  return { session, setSession, email, setEmail };
};

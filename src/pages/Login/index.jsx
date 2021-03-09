import React, { useContext } from 'react';
import { Form, Input, Button, Checkbox, message as messageInfo } from 'antd';
import styles from './login.less';
import { history } from 'umi';
import { LoginIn } from '../../api/idm';
import { LoginContext, useUser } from '../../layouts/CommonLayout/store';

// const { UserOutlined, LockOutlined } = icons;

const Login = () => {
  const { setLogin } = useContext(LoginContext);
  const { session, setSession, email, setEmail } = useUser();

  const onFinish = (values) => {
    const email = values['username'];
    const password = values['password'];
    LoginIn({ email, password }).then((res) => {
      if (res.resultCode === 120) {
        setLogin(true);
        messageInfo.success(res.message);
        setSession(res.session_id);
        setEmail(email);
        history.push('./search');
      } else {
        messageInfo.error(res.message);
      }
    });
  };

  return (
    <div className={styles['container']}>
      <div className={styles['center']}>
        <h1>Login</h1>
        <Form
          name="normal_login"
          className={styles['login-form']}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit" className={styles['login-form-button']}>
              Log in
            </Button>
          </Form.Item>
          <p>
            <span>Don't have an account? Sign up </span>
            <a href="./register" style={{ textDecoration: 'underline', color: '#ffffff' }}>
              here
            </a>
            .
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import {message as messageInfo} from "antd";
import styles from './register.less';
import {RegisterReg} from '../../api/public'

// const { UserOutlined, LockOutlined } = icons;

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    const email = values["username"];
    const pwd = values["password"];
    const repwd = values["re-password"]
    if(!email || !pwd || !repwd) {
      return;
    }

    if(pwd !== repwd) {
      messageInfo.error("Two passwords do not match!")
      return;
    }

    RegisterReg({email:email, password:pwd}).then(({resultCode, message}) => {
      if(resultCode === 110) {
        messageInfo.success(message);
      }else {
        messageInfo.error(message);
      }
    })
    
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['center']}>
        <h1>Register</h1>
        <Form
          name="normal_login"
          className={styles['register-form']}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
          <Form.Item
            name="re-password"
            label="Re-enter Password"
            rules={[
              {
                required: true,
                message: 'Please re-enter your Password!',
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
            <Button htmlType="submit" className={styles['register-form-button']}>
              Register
            </Button>
          </Form.Item>
          <p>
            <span>Have an account already? Log in </span>
            <a href="./login" style={{ textDecoration: 'underline', color: '#ffffff' }}>
              here
            </a>
            .
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;

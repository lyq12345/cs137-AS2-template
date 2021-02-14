import request from '@/utils/request';

// login
export const LoginIn = async (data) =>
  request('/login', {
    method: 'POST',
    data,
    prefixType: 'idm'
  });

// register
export const RegisterReg = async (data) =>
  request('/register', {
    method: 'POST',
    data,
    prefixType: 'idm'
  });
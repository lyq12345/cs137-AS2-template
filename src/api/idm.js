import request from '@/utils/request';
import gateway from './gateway';
import axios from 'axios';

// login
export const LoginIn = async (data) => {
  const response = await request('idm/login', {
    method: 'POST',
    data,
    getResponse: true,
  });

  return await gateway.getReport(response);
};

// register
export const RegisterReg = async (data) => {
  const response = await request('idm/register', {
    method: 'POST',
    data,
    getResponse: true,
  });

  return gateway.getReport(response);
};

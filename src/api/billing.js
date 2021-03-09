import request from '@/utils/request';
import gateway from './gateway';

// insert into cart
export const CartInsert = async (data) => {
  const response = await request('/billing/cart/insert', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

//update cart item
export const UpdateCart = async (data) => {
  const response = await request('/billing/cart/update', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// delete cart item
export const DeleteCart = async (data) => {
  const response = await request('/billing/cart/delete', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// clear cart
export const ClearCart = async (data) => {
  const response = await request('/billing/cart/clear', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// retrieve bought movies
export const RetrieveCart = async (data) => {
  const response = await request('/billing/cart/retrieve', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// place order
export const OrderPlace = async (data) => {
  const response = await request('/billing/order/place', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// retrieve order
export const OrderRetrieve = async (data) => {
  const response = await request('/billing/order/retrieve', {
    method: 'POST',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// complete order
export const OrderComplete = async (data) => {
  const response = await request('/billing/order/complete', {
    method: 'get',
    data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

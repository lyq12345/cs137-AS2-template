import request from '@/utils/request';
import gateway from './gateway';

// search movies
export const Search = async (data) => {
  const response = await request('movies/search', {
    method: 'get',
    params: data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

export const GetMovie = async (data) => {
  const response = await request(`movies/get/${data}`, {
    method: 'get',
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

// search by keywords
export const BrowseMovie = async (data) => {
  const response = await request(`movies/browse/${data.phrase}`, {
    method: 'get',
    params: data,
    getResponse: true,
    headers: {
      email: localStorage.getItem('email'),
      session_id: localStorage.getItem('session_id'),
    },
  });

  return await gateway.getReport(response);
};

import request from '@/utils/request';

// search movies
export const Search = async (data) =>
  request('/search', {
    method: 'get',
    params: data,
  });
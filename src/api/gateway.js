import request from '@/utils/request';
import { FieldTimeOutlined } from '@ant-design/icons';
import { useUser } from '@/layouts/CommonLayout/store';

const pollLimit = 10;
// const { session, email } = useUser();

const Report = async (headers) =>
  request('report', {
    method: 'get',
    getResponse: true,
    headers,
  });

async function getReport(res) {
  let noContent = 204;
  const { data, response } = res;

  if (response.status !== noContent) {
    return data;
  }

  const props = {
    transaction_id: response.headers.get('transaction_id'),
    session_id: localStorage.getItem('session_id'),
    email: localStorage.getItem('email'),
  };

  for (let i = 0; i < pollLimit; i++) {
    const res = await Report(props);
    if (res.response.status !== noContent) {
      // checking for response

      return res.data;
    } else await timeOut();
  }

  return undefined;
}

async function timeOut() {
  return new Promise((resolve) => {
    let pollingTimeoutMilliSeconds = 1000;
    setTimeout(() => resolve(), pollingTimeoutMilliSeconds);
  });
}

export default {
  getReport,
};

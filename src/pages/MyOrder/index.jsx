import React, { useEffect, useState } from 'react';
import { List, message as messageInfo, Table } from 'antd';
import OrderItem from './components/OrderItem';
import styles from './index.less';
import { OrderRetrieve } from '@/api/billing';

const items = [
  {
    date: '1999-0512-4124-4124',
    amount: 1000,
    state: 'completed',
  },
  {
    date: '1999-0512-4124-4124',
    amount: 1000,
    state: 'completed',
  },
  {
    date: '1999-0512-4124-4124',
    amount: 1000,
    state: 'completed',
  },
];

const MyOrder = () => {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    const params = {
      email: localStorage.getItem('email'),
    };
    OrderRetrieve(params).then((res) => {
      if (res.resultCode === 3410) {
        messageInfo.success(res.message);
        setOrderItems(res.transactions);
      } else {
        messageInfo.error(res.message);
      }
    });
  }, []);
  return (
    <div className={styles['order-container']}>
      <h1>My Orders</h1>
      <List
        bordered={true}
        dataSource={orderItems}
        itemLayout="vertical"
        renderItem={(item) => (
          <List.Item>
            <OrderItem orderInfo={item} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MyOrder;

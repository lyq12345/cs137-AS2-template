import React, { useState, useEffect } from 'react';
import { Row, Col, InputNumber, message as messageInfo } from 'antd';
import styles from './OrderItem.less';

const OrderItem = ({ orderInfo }) => {
  return (
    <div>
      <Row>
        <Col span={12} className={styles['date-col']}>
          <span>{orderInfo?.update_time}</span>
        </Col>
        <Col span={6} className={styles['amount-col']}>
          <span>{`$ ${(Math.floor(orderInfo?.amount.total * 100) / 100).toFixed(2)}`}</span>
        </Col>
        <Col span={6} className={styles['state-col']}>
          <span>{orderInfo?.state}</span>
        </Col>
      </Row>
    </div>
  );
};

export default OrderItem;

import { Card } from 'antd';
import React from 'react';
import { history } from 'umi';
import styles from './index.less';

const ProductCard = ({ product, cover }) => {
  const handleClick = () => {
    history.push(`./detail/${product.id}`);
  };
  return (
    <Card hoverable className={styles['card-container']} onClick={handleClick}>
      <img src={cover} alt="no source" />
      <p className={styles.title}>{product.title}</p>
      <p>{product.brand}</p>
      <p>{product.price}</p>
      <p>{product.rating}</p>
    </Card>
  );
};

export default ProductCard;

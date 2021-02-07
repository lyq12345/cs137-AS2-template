import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

const MovieCard = ({ title, poster }) => {
  return (
    <Card hoverable className={styles['card-container']}>
      <img src={poster} />
      <p>{title}</p>
    </Card>
  );
};

export default MovieCard;

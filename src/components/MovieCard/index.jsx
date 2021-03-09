import React from 'react';
import { Card } from 'antd';
import styles from './index.less';
import { history } from 'umi';
const MovieCard = ({ movie, poster }) => {
  const handleClick = () => {
    history.push(`./detail/${movie.movie_id}`);
  };
  return (
    <Card hoverable className={styles['card-container']} onClick={handleClick}>
      <img src={poster} />
      <p className={styles['title']}>{movie.title}</p>
      <p>{movie.director}</p>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
    </Card>
  );
};

export default MovieCard;

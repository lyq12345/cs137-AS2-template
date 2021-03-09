import React from 'react';
import styles from './index.less';
import Logo from '../../../public/logo.png';
import Poster1 from '../../../public/poster1.jpg';
import Poster2 from '../../../public/poster2.jpg';
import Poster3 from '../../../public/poster3.jpg';
import { Card, Col, Row } from 'antd';
import MovieCard from '../../components/MovieCard';
import SearchBar from '../Search/components/SearchBar';

const cardList = [
  {
    title: 'Baby Driver',
    poster: Poster1,
  },
  {
    title: 'Spider-Man: Into the Spider-Verse',
    poster: Poster2,
  },
  {
    title: 'John Wick',
    poster: Poster3,
  },
];
const Index = () => {
  return (
    <div className={styles['home-bkg']}>
      {/* <div className={styles['search-bar']}>
        <SearchBar />
      </div> */}
      <div className={styles['center']}>
        <div className={styles['main-title']}>
          <img src={Logo} />
          <span>FabFlix</span>
        </div>
        <div className={styles['sub-title']}>
          <span>Check out some movies!</span>
        </div>
        <div className={styles['card-list']}>
          <Row gutter={2}>
            {cardList.map((item) => (
              <Col span={8} className={styles['card-col']}>
                <MovieCard title={item.title} poster={item.poster} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Index;

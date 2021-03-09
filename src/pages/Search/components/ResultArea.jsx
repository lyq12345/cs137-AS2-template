import React, { useState } from 'react';
import { Table, List, Pagination } from 'antd';
import MovieCard from '@/components/MovieCard';
import Poster1 from '@/../public/poster1.jpg';

const ResultArea = (props) => {
  return (
    <div style={{ marginTop: '150px' }}>
      <List
        grid={{ column: 5 }}
        dataSource={props.movies}
        renderItem={(item) => (
          <List.Item>
            <MovieCard movie={item} poster={Poster1} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ResultArea;

import Poster1 from '@/../public/poster1.jpg';
import ProductCard from '@/components/ProductCard';
import { List } from 'antd';
import React from 'react';

const ResultArea = (props) => {
  return (
    <div style={{ marginTop: '150px' }}>
      <List
        grid={{ column: 5 }}
        dataSource={props.products}
        renderItem={(item) => (
          <List.Item>
            <ProductCard product={item} cover={Poster1} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ResultArea;

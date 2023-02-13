import { Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import ResultArea from './components/ResultArea';
import styles from './index.less';

const productList = [
  {
    id: '1',
    title: 'iPhone 1',
    brand: 'Apple',
    price: '$1000',
    rating: '5',
    imgUrl: ''
  },
  {
    id: '2',
    title: 'iPhone 2',
    brand: 'Apple',
    price: '$1000',
    rating: '5',
    imgUrl: ''
  },
  {
    id: '3',
    title: 'iPhone 3',
    brand: 'Apple',
    price: '$1000',
    rating: '5',
    imgUrl: ''
  },
  {
    id: '4',
    title: 'iPhone 4',
    brand: 'Apple',
    price: '$1000',
    rating: '5',
    imgUrl: ''
  },
];

const SearchPage = () => {
  const [products, setProducts] = useState([]);
  const [pageSize, setSize] = useState(10);
  const [formData, setFormData] = useState(null);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    setProducts(productList)
  }, []);

  // const handlePageChange = (page) => {
  //   setCurrent(page);
  //   handleSearch(formData, page);
  // };

  return (
    <div className={styles.container}>
      <ResultArea products={products} />
      {/* {total > 0 ? (
        <div className={styles.pagination}>
          <Pagination
            pageSize={pageSize}
            total={total}
            current={current}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      ) : null} */}
    </div>
  );
};

export default SearchPage;

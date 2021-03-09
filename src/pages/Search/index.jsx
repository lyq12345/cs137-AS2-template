import React, { useState } from 'react';
import styles from './index.less';
import SearchBar from './components/SearchBar';
import ResultArea from './components/ResultArea';
import { Pagination, message as messageInfo, Spin } from 'antd';
import { Search, BrowseMovie } from '@/api/movies';

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  const [pageSize, setSize] = useState(10);
  const [formData, setFormData] = useState(null);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [searchLoading, setLoading] = useState(false);

  const handleSearch = (params, page = 1) => {
    params.offset = (page - 1) * pageSize;
    setFormData(params);

    if (params.phrase) {
      BrowseMovie(params)
        .then((res) => {
          setLoading(true);
          if (res.resultCode === 210) {
            messageInfo.success(res.message);
            setMovies(res.movies);
            setTotal(res.total);
          } else if (res.resultCode === 211) {
            // 不能直接用，因为res.movies为undefined
            setMovies([]);
            setTotal(0);
            messageInfo.warning(res.message);
          } else {
            messageInfo.error(res.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      Search(params)
        .then((res) => {
          setLoading(true);
          if (res.resultCode === 210) {
            messageInfo.success(res.message);
            setMovies(res.movies);
            setTotal(res.total);
          } else if (res.resultCode === 211) {
            // 不能直接用，因为res.movies为undefined
            setMovies([]);
            setTotal(0);
            messageInfo.warning(res.message);
          } else {
            messageInfo.error(res.message);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handlePageChange = (page) => {
    setCurrent(page);
    handleSearch(formData, page);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['search-bar']}>
        <SearchBar handleSearch={handleSearch} />
      </div>
      <Spin spinning={searchLoading}>
        <ResultArea movies={movies} />
        {total > 0 ? (
          <div className={styles['pagination']}>
            <Pagination
              pageSize={pageSize}
              total={total}
              current={current}
              onChange={handlePageChange}
              showSizeChanger={false}
            />
          </div>
        ) : null}
      </Spin>
    </div>
  );
};

export default SearchPage;

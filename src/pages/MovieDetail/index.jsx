import React, { useState, useEffect } from 'react';
import { useParams } from 'umi';
import { Pagination, message as messageInfo, Row, Col, Button, Modal, InputNumber } from 'antd';
import { GetMovie } from '@/api/movies';
import { CartInsert } from '@/api/billing';
import styles from './index.less';
import Poster1 from '@/../public/poster1.jpg';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState({});
  const [shown, setShown] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [confirmLoading, setLoading] = useState(false);

  useEffect(() => {
    GetMovie(movieId).then((res) => {
      if (res.resultCode === 210) {
        messageInfo.success(res.message);
        setDetail(res.movie);
      }
    });
  }, [movieId]);

  const handleOk = () => {
    setLoading(true);
    const params = {
      email: localStorage.getItem('email'),
      movie_id: detail.movie_id,
      quantity: quantity,
    };
    console.log(params);
    CartInsert(params)
      .then((res) => {
        if (res.resultCode === 3100) {
          messageInfo.success(res.message);
          setShown(false);
        } else {
          messageInfo.error(res.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const handleCancel = () => {
    setShown(false);
  };

  const handleBuyButton = () => {
    setShown(true);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <div className={styles['detail-container']}>
      <Modal
        title="Specify Quantity"
        visible={shown}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Add to Cart"
      >
        <InputNumber defaultValue={1} min={0} onChange={handleQuantityChange} />
      </Modal>
      <h1>
        <span>{detail?.title}</span>
        <span style={{ marginLeft: '20px' }}> ({detail.year})</span>
      </h1>
      <div className={styles['article']}>
        <Row>
          <Col span={6}>
            <img src={Poster1} />
          </Col>
          <Col span={12} style={{ paddingRight: '10px' }}>
            <div>
              <p>Director: {detail?.director}</p>
              <p>
                Stuff:
                {detail.people?.map((item, index, arr) => (
                  <span>
                    {item.name}
                    {index !== arr.length - 1 ? ' / ' : null}
                  </span>
                ))}
              </p>
              <p>
                Genre:{' '}
                {detail.genres?.map((item, index, arr) => (
                  <span>
                    {item.name}
                    {index !== arr.length - 1 ? ' / ' : null}
                  </span>
                ))}
              </p>
              <p>Overview: {detail?.overview}</p>
            </div>
            <div>
              <Button type="primary" onClick={handleBuyButton}>
                Add to Cart!
              </Button>
            </div>
          </Col>
          <Col span={6} className={styles['right-sider']}>
            <span>
              <h2>Rating</h2>
              <span>
                <span className={styles['rate-number']}>{detail?.rating}</span>
                <span className={styles['rate-people']}>{`${detail?.num_votes} people votes`}</span>
              </span>
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MovieDetail;

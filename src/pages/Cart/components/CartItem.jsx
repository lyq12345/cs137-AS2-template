import React, { useState, useEffect } from 'react';
import Poster1 from '@/../public/poster1.jpg';
import styles from './CartItem.less';
import { Row, Col, InputNumber, message as messageInfo } from 'antd';
import { ClearCart, DeleteCart, UpdateCart } from '@/api/billing';

const CartItem = ({ movieInfo, deleteItem, updateItem }) => {
  const [quantity, setQuantity] = useState(1);
  const [quanDisabled, setDisable] = useState(false);
  useEffect(() => {
    setQuantity(movieInfo.quantity);
  }, [movieInfo]);

  const changeQuantity = (quantity) => {
    setDisable(true);
    const parmas = {
      email: localStorage.getItem('email'),
      movie_id: movieInfo.movie_id,
      quantity,
    };
    UpdateCart(parmas)
      .then((res) => {
        if (res.resultCode === 3110) {
          messageInfo.success(res.message);
          setQuantity(quantity);
          updateItem(localStorage.getItem('email'), movieInfo.movie_id, quantity);
        } else {
          messageInfo.error(res.message);
        }
      })
      .finally(() => {
        setDisable(false);
      });
  };
  const handleQuantityChange = (value, info) => {
    let afterQuantity = quantity;
    if (info.type === 'up') {
      afterQuantity = afterQuantity + info.offset;
      changeQuantity(afterQuantity);
    } else if (info.type === 'down') {
      afterQuantity = afterQuantity - info.offset;
      changeQuantity(afterQuantity);
    }
  };

  const handleDelete = () => {
    const email = localStorage.getItem('email');
    const movieId = movieInfo.movie_id;
    deleteItem(email, movieId);
  };

  return (
    <div className={styles['item-container']}>
      <Row>
        <Col span={4} className={styles['left-col']}>
          <img src={Poster1} />
        </Col>
        <Col span={12} className={styles['mid-col']}>
          <p>{movieInfo.movie_title}</p>
        </Col>
        <Col span={4} className={styles['quantity-col']}>
          <InputNumber
            onStep={handleQuantityChange}
            value={quantity}
            min={0}
            // onChange={handleQuantityChange}
            disabled={quanDisabled}
          />
        </Col>
        <Col span={2} className={styles['right-col']}>
          <span>{`$ ${(
            Math.floor(movieInfo.unit_price * quantity * (1 - movieInfo.discount) * 100) / 100
          ).toFixed(2)}`}</span>
        </Col>
        <Col span={2} className={styles['delete-col']}>
          <a onClick={handleDelete}>Delete</a>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;

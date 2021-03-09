import React, { useEffect, useState } from 'react';
import { List, message as messageInfo, Button } from 'antd';
import { RetrieveCart, DeleteCart, ClearCart, OrderPlace } from '@/api/billing';
import CartItem from './components/CartItem';
import styles from './index.less';
import { history } from 'umi';
const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [clearLoding, setClearLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  useEffect(() => {
    const params = {
      email: localStorage.getItem('email'),
    };
    RetrieveCart(params).then((res) => {
      if (res.resultCode === 3130) {
        setCartItems(res?.items);
        messageInfo.success(res.message);
      } else if (res.resultCode === 312) {
        messageInfo.warning('Cart is empty!');
      } else {
        messageInfo.error(res.message);
      }
    });
  }, []);

  useEffect(() => {
    // total
    let tmpTotal = 0;
    cartItems.forEach((item) => {
      const singlePrice =
        Math.floor(item.unit_price * item.quantity * (1 - item.discount) * 100) / 100;
      tmpTotal = tmpTotal + singlePrice;
    });
    setTotal(tmpTotal);
  }, [cartItems]);

  const deleteItem = (email, movieId) => {
    const parmas = {
      email,
      movie_id: movieId,
    };
    DeleteCart(parmas).then((res) => {
      if (res.resultCode === 3120) {
        let arr = cartItems;
        arr.forEach((item, index) => {
          if (item.email === email && item.movie_id === movieId) {
            arr.splice(index, 1);
          }
        });
        const newArr = Array.from(new Set(arr));
        setCartItems(newArr);
        messageInfo.success(res.message);
      } else {
        messageInfo.error(res.message);
      }
    });
  };

  const updateItem = (email, movieId, quantity) => {
    let arr = cartItems;
    arr.forEach((item, index) => {
      if (item.email === email && item.movie_id === movieId) {
        arr[index].quantity = quantity;
      }
    });
    const newArr = Array.from(new Set(arr));
    setCartItems(newArr);
  };

  const clearItem = () => {
    if (cartItems.length === 0) {
      messageInfo.warning('Cart is empty!');
      return;
    }
    setClearLoading(true);
    const params = {
      email: localStorage.getItem('email'),
    };
    ClearCart(params)
      .then((res) => {
        if (res.resultCode === 3140) {
          messageInfo.success(res.message);
          setCartItems([]);
        } else {
          messageInfo.error(res.message);
        }
      })
      .finally(() => {
        setClearLoading(false);
      });
  };

  const handlePay = () => {
    if (cartItems.length === 0) {
      messageInfo.warning('Cart is empty!');
      return;
    }
    const params = {
      email: localStorage.getItem('email'),
    };
    OrderPlace(params).then((res) => {
      if (res.resultCode === 3400) {
        messageInfo.success(res.message);
        window.location.replace(res.approve_url);
      } else {
        messageInfo.error(res.message);
      }
    });
  };

  return (
    <div className={styles['cart-container']}>
      <h1>My Shopping Cart</h1>
      <Button type="primary" onClick={clearItem} loading={clearLoding}>
        Clear
      </Button>
      <div className={styles['pay-btn']}>
        <Button type="primary" onClick={handlePay}>
          Pay for it!
        </Button>
      </div>

      <List
        dataSource={cartItems}
        itemLayout="vertical"
        renderItem={(item) => (
          <List.Item>
            <CartItem movieInfo={item} deleteItem={deleteItem} updateItem={updateItem} />
          </List.Item>
        )}
      />
      <div className={styles['total-bar']}>
        <span>{`Total: $ ${(Math.floor(total * 100) / 100).toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default MyCart;

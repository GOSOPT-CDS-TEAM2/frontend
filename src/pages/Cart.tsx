import { useEffect, useState } from 'react';
import styled from 'styled-components';

import CategoryNav from '../components/cart/CategoryNav';
import DeliveryCheck from '../components/cart/DeliveryCheck';
import Header from '../components/cart/Header';
import { getCartData } from '../utils/lib/cart';

const Cart = () => {
  const [cartProductsNum, setCartProductsNum] = useState(0);
  const getCartList = async () => {
    try {
      const {
        data: { data },
      } = await getCartData();
      setCartProductsNum(data.cartProducts.length);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <St.CartContainer>
      <Header cartProductsNum={cartProductsNum} />
      <CategoryNav cartProductsNum={cartProductsNum} />
      <DeliveryCheck />
    </St.CartContainer>
  );
};

export default Cart;

const St = {
  CartContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;

    overflow-x: hidden;
  `,
};

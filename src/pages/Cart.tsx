import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import CategoryNav from '../components/cart/CategoryNav';
import DeliveryCheck from '../components/cart/DeliveryCheck';
import Header from '../components/cart/Header';
import { cartDataState } from '../states/cart';
import { getCartData } from '../utils/lib/cart';

const Cart = () => {
  const [cartData, setCartData] = useRecoilState(cartDataState);

  const getCartList = async () => {
    try {
      const {
        data: { data },
      } = await getCartData();
      setCartData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <St.CartContainer>
      <Header cartProductsNum={cartData.cartProducts.length} />
      <CategoryNav cartProductsNum={cartData.cartProducts.length} />
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

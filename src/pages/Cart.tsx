import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import CartProductList from '../components/cart/CartProductList';
import CategoryNav from '../components/cart/CategoryNav';
import DeliveryCheck from '../components/cart/DeliveryCheck';
import Header from '../components/cart/Header';
import { cartDataState, overallCheckState, totalQuantitySelector } from '../states/cart';
import { getCartData } from '../utils/lib/cart';

const Cart = () => {
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const [overallCheck, setOverallCheck] = useRecoilState(overallCheckState);

  const totalQuantity = useRecoilValue(totalQuantitySelector);

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
      <Header cartProductsNum={totalQuantity} />
      <CategoryNav cartProductsNum={totalQuantity} />
      <DeliveryCheck />
      <CartProductList />
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

import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import CartProductList from '../components/cart/CartProductList';
import CategoryNav from '../components/cart/CategoryNav';
import DeliveryCheck from '../components/cart/DeliveryCheck';
import Header from '../components/cart/Header';
import PaymentDetail from '../components/cart/PaymentDetail';
import Recommend from '../components/cart/Recommend';
import Footer from '../components/common/Footer';
import MenuBar from '../components/common/MenuBar';
import { cartDataState, overallCheckState, overallQuantityState, totalQuantitySelector } from '../states/cart';
import { Check, Quantity } from '../types/cart';
import { CartProductsData, Check, Quantity } from '../types/cart';

import { getCartData } from '../utils/lib/cart';

const Cart = () => {
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const setOverallCheck = useSetRecoilState(overallCheckState);
  const setOverallQuantity = useSetRecoilState(overallQuantityState);
  const totalQuantity = useRecoilValue(totalQuantitySelector);

  const getCartList = () => {
    setCartData(cartData);

    //장바구니 데이터 수에 맞게 overallCheck 초기화
    const tempOverallCheck: Check = Object.values(cartData.cartProducts).reduce((acc, { cartProductId }) => {
      return { ...acc, [cartProductId]: true };
    }, {});
    setOverallCheck(tempOverallCheck);

    //장바구니 데이터 수에 맞게 overallQuantity 초기화
    const tempOverallQuantity: Quantity = Object.values(cartData.cartProducts).reduce(
      (acc, { cartProductId, count }) => {
        return { ...acc, [cartProductId]: count };
      },
      {},
    );
    setOverallQuantity(tempOverallQuantity);
  };

  useEffect(() => {
    getCartList();
  }, []);

  return (
    <St.CartContainer>
      <Header totalQuantity={totalQuantity} />
      <CategoryNav totalQuantity={totalQuantity} />
      <DeliveryCheck />
      <CartProductList />
      <PaymentDetail totalQuantity={totalQuantity} />
      <Recommend />
      <Footer />
      <MenuBar />
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

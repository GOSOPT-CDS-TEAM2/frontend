import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import CartProductList from '../components/cart/CartProductList';
import CategoryNav from '../components/cart/CategoryNav';
import DeliveryCheck from '../components/cart/DeliveryCheck';
import Header from '../components/cart/Header';
import PaymentDetail from '../components/cart/PaymentDetail';
import { cartDataState, overallCheckState, overallQuantityState, totalQuantitySelector } from '../states/cart';
import { CartProductsData, Check, Quantity } from '../types/cart';

import { getCartData } from '../utils/lib/cart';

const Cart = () => {
  const [cartData, setCartData] = useRecoilState(cartDataState);
  const [overallCheck, setOverallCheck] = useRecoilState(overallCheckState);
  const [overallQuantity, setOverallQuantity] = useRecoilState(overallQuantityState);

  const totalQuantity = useRecoilValue(totalQuantitySelector);

  const getCartList = async () => {
    try {
      const {
        data: { data },
      } = await getCartData();

      setCartData(data);

      //장바구니 데이터 수에 맞게 overallCheck 초기화
      const tempOverallCheck: Check = {};
      data.cartProducts.forEach((item: CartProductsData) => {
        tempOverallCheck[item.cartProductId] = true;
      });
      setOverallCheck(tempOverallCheck);

      //장바구니 데이터 수에 맞게 overallQuantity 초기화
      const tempOverallQuantity: Quantity = {};
      data.cartProducts.forEach((item: CartProductsData) => {
        tempOverallQuantity[item.cartProductId] = item.count;
      });
      setOverallQuantity(tempOverallQuantity);
    } catch (e) {
      console.log(e);
    }
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

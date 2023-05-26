import { CartProductsData, Check, Quantity } from '../types/cart';
import { cartDataState, overallCheckState, overallQuantityState, totalQuantitySelector } from '../states/cart';
import { useRecoilState, useRecoilValue } from 'recoil';

import CartProductList from '../components/cart/CartProductList';
import CategoryNav from '../components/cart/CategoryNav';
import DeliveryCheck from '../components/cart/DeliveryCheck';
import Footer from '../components/common/Footer';
import Header from '../components/cart/Header';
import MenuBar from '../components/common/MenuBar';
import PaymentDetail from '../components/cart/PaymentDetail';
import Recommend from '../components/cart/Recommend';
import { getCartData } from '../utils/lib/cart';
import styled from 'styled-components';
import { useEffect } from 'react';

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
      const tempOverallCheck: Check = Object.values(data.cartProducts).reduce((acc, { cartProductId }) => {
        return { ...acc, [cartProductId]: true };
      }, {});
      setOverallCheck(tempOverallCheck);

      //장바구니 데이터 수에 맞게 overallQuantity 초기화
      const tempOverallQuantity: Quantity = Object.values(data.cartProducts).reduce((acc, { cartProductId, count }) => {
        return { ...acc, [cartProductId]: count };
      }, {});
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

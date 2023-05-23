import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from '../components/Cart/Header';
import { getCartData } from '../utils/lib/cart';

const Cart = () => {
  const [cartProductsNum, setCartProductsNum] = useState(0);
  useEffect(() => {
    try {
      getCartData()
        .then((res) => res.data)
        .then((res) => {
          if (res.code === 200) {
            const data = res.data;
            console.log(data);
            setCartProductsNum(data.cartProducts.length);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <St.CartContainer>
      <Header cartProductsNum={cartProductsNum} />
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

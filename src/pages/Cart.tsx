import styled from 'styled-components';

import Header from '../components/Cart/Header';

const Cart = () => {
  return (
    <St.CartContainer>
      <Header />
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

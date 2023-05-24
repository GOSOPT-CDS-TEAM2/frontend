import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { cartDataState } from '../../states/cart';

import CartProduct from './CartProduct';

const CartProductList = () => {
  const cartData = useRecoilValue(cartDataState);

  const cartProductList = cartData.cartProducts.map((cartProduct) => (
    <CartProduct key={cartProduct.cartProductId} cartProduct={cartProduct} />
  ));

  return <St.CartProductListContainer>{cartProductList}</St.CartProductListContainer>;
};

export default CartProductList;

const St = {
  CartProductListContainer: styled.main`
    display: flex;
    flex-direction: column;
  `,
};

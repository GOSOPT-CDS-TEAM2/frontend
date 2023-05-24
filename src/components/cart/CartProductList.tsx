import { useRecoilValue } from 'recoil';

import { cartDataState } from '../../states/cart';

import CartProduct from './CartProduct';

const CartProductList = () => {
  const cartData = useRecoilValue(cartDataState);

  const cartProductList = cartData.cartProducts.map((cartProduct) => (
    <CartProduct key={cartProduct.cartProductId} cartProduct={cartProduct} />
  ));

  return <>{cartProductList}</>;
};

export default CartProductList;

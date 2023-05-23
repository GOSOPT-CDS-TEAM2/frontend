import styled from 'styled-components';

import { CartProductsData } from '../../types/cart';

interface CartProductProps {
  product: CartProductsData;
}

const CartProduct = (props: CartProductProps) => {
  const { product }: CartProductProps = props;
  return <St.CartProductContainer>{product.productName}</St.CartProductContainer>;
};

export default CartProduct;

const St = {
  CartProductContainer: styled.div``,
};

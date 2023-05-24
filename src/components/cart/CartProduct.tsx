import { useState } from 'react';
import styled from 'styled-components';

import { CartProductsData } from '../../types/cart';

interface CartProductProp {
  cartProduct: CartProductsData;
}

const CartProduct = (props: CartProductProp) => {
  const { cartProduct } = props;

  return (
    <St.CartProductContainer>
      <label>
        <input
          type="checkbox"
          checked={true}
          onChange={() => {
            // setCheck(!check);
          }}
        />
      </label>
      <img src={cartProduct.productImgSrc} alt={cartProduct.productName}></img>
    </St.CartProductContainer>
  );
};

export default CartProduct;

const St = {
  CartProductContainer: styled.div``,
};

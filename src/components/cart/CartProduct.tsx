import { useState } from 'react';
import styled from 'styled-components';

import { CartProductsData } from '../../types/cart';

interface CartProductProp {
  product: CartProductsData;
}

const CartProduct = (props: CartProductProp) => {
  const { product } = props;
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(product.count);
  const [totalCost, setTotalCost] = useState();

  return (
    <St.CartProductContainer>
      <label>
        <input
          type="checkbox"
          checked={check}
          onChange={() => {
            setCheck(!check);
          }}
        />
      </label>
      <img src={product.productImgSrc} alt={product.productName}></img>
    </St.CartProductContainer>
  );
};

export default CartProduct;

const St = {
  CartProductContainer: styled.div``,
};

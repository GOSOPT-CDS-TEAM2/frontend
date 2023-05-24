import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { overallCheckState } from '../../states/cart';
import { CartProductsData } from '../../types/cart';

interface CartProductProp {
  cartProduct: CartProductsData;
}

const CartProduct = (props: CartProductProp) => {
  const { cartProduct } = props;

  const [overallCheck, setOverallCheck] = useRecoilState(overallCheckState);

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

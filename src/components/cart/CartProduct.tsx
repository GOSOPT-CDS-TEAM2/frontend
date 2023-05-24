import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { overallCheckState, overallQuantityState } from '../../states/cart';
import { CartProductsData } from '../../types/cart';

interface CartProductProp {
  cartProduct: CartProductsData;
}

const CartProduct = (props: CartProductProp) => {
  const { cartProduct } = props;
  const cartProductId = cartProduct.cartProductId;

  const [overallCheck, setOverallCheck] = useRecoilState(overallCheckState);
  const [overallQuantity, setOverallQuantity] = useRecoilState(overallQuantityState);

  return (
    <St.CartProductContainer>
      <label>
        <input
          type="checkbox"
          checked={overallCheck[cartProductId]}
          onChange={() => {
            setOverallCheck((prevObject) => ({
              ...prevObject,
              [cartProductId]: !overallCheck[cartProductId],
            }));
          }}
        />
        <img src={cartProduct.productImgSrc} alt={cartProduct.productName}></img>
      </label>
      <h2>{cartProduct.productName}</h2>
      <button type="button">-</button>
      <span>{cartProduct.count}</span>
      <button type="button">+</button>
    </St.CartProductContainer>
  );
};

export default CartProduct;

const St = {
  CartProductContainer: styled.div`
    img {
      width: 10rem;
    }
  `,
};

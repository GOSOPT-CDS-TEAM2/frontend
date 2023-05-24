import { useState } from 'react';
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

  const [calcOriginalPrice, setCalcOriginalPrice] = useState(cartProduct.originalPrice);
  const [calcDiscountPrice, setCalcDiscountPrice] = useState(cartProduct.discountPrice);

  const onQuantityDecrease = () => {
    const newQuantity = overallQuantity[cartProductId] <= 1 ? 1 : overallQuantity[cartProductId] - 1;

    setOverallQuantity((prevObject) => ({
      ...prevObject,
      [cartProductId]: newQuantity,
    }));

    setCalcDiscountPrice(cartProduct.discountPrice * newQuantity);
    setCalcOriginalPrice(cartProduct.originalPrice * newQuantity);
  };

  const onQuantityIncrease = () => {
    const newQuantity = overallQuantity[cartProductId] + 1;

    setOverallQuantity((prevObject) => ({
      ...prevObject,
      [cartProductId]: newQuantity,
    }));

    setCalcDiscountPrice(cartProduct.discountPrice * newQuantity);
    setCalcOriginalPrice(cartProduct.originalPrice * newQuantity);
  };

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
      <button type="button" onClick={onQuantityDecrease}>
        -
      </button>
      <span>{overallQuantity[cartProductId]}</span>
      <button type="button" onClick={onQuantityIncrease}>
        +
      </button>
      <span>원래가격{calcOriginalPrice}</span>
      <span>할인가격 {calcDiscountPrice}</span>
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

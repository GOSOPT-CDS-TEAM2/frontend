import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { overallCheckState, overallQuantityState } from '../../states/cart';
import { CartProductsData } from '../../types/cart';
import { patchCartQuantityData } from '../../utils/lib/cart';

interface CartProductProp {
  cartProduct: CartProductsData;
}

const CartProduct = (props: CartProductProp) => {
  const { cartProduct } = props;
  const cartProductId = cartProduct.cartProductId;

  // 전역상태: 모든 상품의 체크 여부 정보, 모든 상품의 수량 정보
  const [overallCheck, setOverallCheck] = useRecoilState(overallCheckState);
  const [overallQuantity, setOverallQuantity] = useRecoilState(overallQuantityState);

  // 지역상태: 이 상품의 원래 가격, 이 상품의 할인 가격
  const [calcOriginalPrice, setCalcOriginalPrice] = useState(cartProduct.originalPrice);
  const [calcDiscountPrice, setCalcDiscountPrice] = useState(cartProduct.discountPrice);

  const patchCartQuantity = async (change: boolean) => {
    try {
      const {
        data: { data },
      } = await patchCartQuantityData({ cartProductId: cartProductId, chagneStatus: change });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onQuantityDecrease = () => {
    // 수량이 1미만으로 감소하지 않도록 한다
    const newQuantity = overallQuantity[cartProductId] <= 1 ? 1 : overallQuantity[cartProductId] - 1;

    // 전역상태 업데이트
    setOverallQuantity((prevObject) => ({
      ...prevObject,
      [cartProductId]: newQuantity,
    }));

    // CORS error: patchCartQuantity(false);

    // 변경된 수량에 따라 이 상품의 원래 가격과 상품 가격 변경
    setCalcDiscountPrice(cartProduct.discountPrice * newQuantity);
    setCalcOriginalPrice(cartProduct.originalPrice * newQuantity);
  };

  const onQuantityIncrease = () => {
    const newQuantity = overallQuantity[cartProductId] + 1;

    // 전역상태 업데이트
    setOverallQuantity((prevObject) => ({
      ...prevObject,
      [cartProductId]: newQuantity,
    }));

    // CORS error: patchCartQuantity(true);

    // 변경된 수량에 따라 이 상품의 원래 가격과 상품 가격 변경
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
      <div>
        <s>원래가격: {calcOriginalPrice}</s>
        <br />
        <span>할인가격: {calcDiscountPrice}</span>
      </div>
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

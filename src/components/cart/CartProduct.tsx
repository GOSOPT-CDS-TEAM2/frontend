import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { CheckCheckedIcon, CheckNotCheckedIcon, MinusIcon, PlusIcon } from '../../assets/icon';
import { overallCheckState, overallQuantityState } from '../../states/cart';
import { CartProductsData } from '../../types/cart';
import { patchCartQuantityData } from '../../utils/lib/cart';
import ProductTag from '../common/ProductTag';

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
  const [calcOriginalPrice, setCalcOriginalPrice] = useState(
    cartProduct.originalPrice * overallQuantity[cartProductId],
  );
  const [calcDiscountPrice, setCalcDiscountPrice] = useState(
    cartProduct.discountPrice * overallQuantity[cartProductId],
  );

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
    <St.BoxShadow>
      <St.CartProductContainer>
        <St.Product>
          <St.ProductDetail>
            <St.CheckLabel $isChecked={overallCheck[cartProductId]}>
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
            </St.CheckLabel>
            <img src={cartProduct.productImgSrc} alt={cartProduct.productName}></img>
            <h2>{cartProduct.productName}</h2>
          </St.ProductDetail>
          <St.QuantityButtons>
            <button id="minus" type="button" onClick={onQuantityDecrease}>
              <img src={MinusIcon} alt="수량 감소 아이콘"></img>
            </button>
            <span>{overallQuantity[cartProductId]}</span>
            <button id="plus" type="button" onClick={onQuantityIncrease}>
              <img src={PlusIcon} alt="수량 증가 아이콘"></img>
            </button>
          </St.QuantityButtons>
        </St.Product>
        <St.PriceContainer>
          <ProductTag>오늘드림</ProductTag>
          <St.Price>
            <s>{calcOriginalPrice.toLocaleString()}원</s>
            <span>{calcDiscountPrice.toLocaleString()}원</span>
          </St.Price>
        </St.PriceContainer>
      </St.CartProductContainer>
    </St.BoxShadow>
  );
};

export default CartProduct;

const St = {
  BoxShadow: styled.div`
    box-shadow: 0 0.1rem 0 rgba(0, 0, 0, 0.05);
  `,
  CartProductContainer: styled.section`
    display: flex;
    flex-direction: column;

    padding: 2.1rem;
    padding-bottom: 1.5rem;

    img {
      width: 10rem;
    }
  `,
  Product: styled.div`
    display: flex;
    gap: 1.4rem;
  `,
  ProductDetail: styled.div`
    display: flex;
    position: relative;

    img {
      width: 7.3rem;
      height: 7.3rem;
      margin-right: 1.4rem;

      border-radius: 0.4rem;
    }

    h2 {
      color: ${({ theme }) => theme.colors.gray_900};
      ${({ theme }) => theme.fonts.SubTitle2}
    }
  `,
  CheckLabel: styled.label<{ $isChecked: boolean }>`
    input {
      position: absolute;
      top: -0.1rem;
      left: -0.1rem;

      width: 1.6rem;
      height: 1.6rem;
      margin: 0;

      border-right: 0;
      background-image: url(${({ $isChecked }) => ($isChecked ? CheckCheckedIcon : CheckNotCheckedIcon)});
      background-size: contain;

      appearance: none;
    }
  `,
  QuantityButtons: styled.aside`
    display: flex;
    justify-content: right;
    align-items: flex-end;

    #minus {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    }

    #plus {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 2.3rem;
      width: 2.3rem;

      border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
      border-radius: 0.2rem;
      background: none;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2.9rem;
      height: 2.3rem;

      border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    }

    img {
      width: 0.6rem;
    }
  `,
  PriceContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 1.5rem;
  `,
  Price: styled.span`
    display: flex;
    gap: 0.7rem;

    color: ${({ theme }) => theme.colors.gray_900};
    ${({ theme }) => theme.fonts.SubHead2}

    s {
      color: ${({ theme }) => theme.colors.gray_300};
      ${({ theme }) => theme.fonts.Body2}
    }
  `,
};

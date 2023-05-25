import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { cartDataState, overallCheckState, overallQuantityState } from '../../states/cart';

const PaymentDetail = () => {
  // 전역상태: 원본 데이터, 모든 상품의 체크 여부 정보, 모든 상품의 수량 정보
  const cartData = useRecoilValue(cartDataState);
  const [overallCheck, setOverallCheck] = useRecoilState(overallCheckState);
  const [overallQuantity, setOverallQuantity] = useRecoilState(overallQuantityState);

  // 지역상태: 총 상품금액, 총 할인금액, 결제 예상금액
  const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
  const [totalDiscountedPrice, setTotalDiscountedPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  let sumOriginalPrice = 0;
  let sumDiscountPrice = 0;
  for (const id in overallCheck) {
    if (overallCheck[id]) {
      const checkedProduct = cartData.cartProducts.filter((product) => product.cartProductId === Number(id))[0];
      sumOriginalPrice += checkedProduct.originalPrice;
      sumDiscountPrice += checkedProduct.discountPrice;
    }
  }

  useEffect(() => {
    setTotalOriginalPrice(sumOriginalPrice);
    setTotalDiscountedPrice(sumOriginalPrice - sumDiscountPrice);
  }, [sumOriginalPrice, sumDiscountPrice]);

  return (
    <St.PaymentDetailContainer>
      <St.PaymentInfoList>
        <St.PaymentInfo>
          <h2>총 상품금액</h2>
          <span>{totalOriginalPrice.toLocaleString()}원</span>
        </St.PaymentInfo>
        <St.PaymentInfo>
          <h2>총 할인금액</h2>
          <span>{totalDiscountedPrice.toLocaleString()}원</span>
        </St.PaymentInfo>
        <St.PaymentInfo>
          <h2>총 배송비</h2>
          <span>{cartData.deliveryFee.toLocaleString()}원</span>
        </St.PaymentInfo>
      </St.PaymentInfoList>
    </St.PaymentDetailContainer>
  );
};

export default PaymentDetail;

const St = {
  PaymentDetailContainer: styled.section`
    display: flex;
    flex-direction: column;

    margin: 2rem 2.1rem;
  `,
  PaymentInfoList: styled.ol`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    margin-bottom: 1.6rem;
  `,
  PaymentInfo: styled.li`
    display: flex;
    justify-content: space-between;

    color: ${({ theme }) => theme.colors.gray_900};

    h2 {
      ${({ theme }) => theme.fonts.Title1};
    }

    span {
      ${({ theme }) => theme.fonts.SubHead2};
    }
  `,
};

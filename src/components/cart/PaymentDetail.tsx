import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { CartGiftIcon, NoticeFillIcon } from '../../assets/icon';
import { cartDataState, overallCheckState, overallQuantityState } from '../../states/cart';

interface PaymentDetailProps {
  totalQuantity: number;
}

const PaymentDetail = (props: PaymentDetailProps) => {
  const { totalQuantity } = props;

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
      sumOriginalPrice += checkedProduct.originalPrice * overallQuantity[id];
      sumDiscountPrice += checkedProduct.discountPrice * overallQuantity[id];
    }
  }

  useEffect(() => {
    setTotalOriginalPrice(sumOriginalPrice);
    setTotalDiscountedPrice(sumOriginalPrice - sumDiscountPrice);
    setFinalPrice(sumDiscountPrice);
  }, [overallCheck, overallQuantity]);

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
      <St.SubText>
        <img src={NoticeFillIcon} alt="안내 아이콘"></img>
        쿠폰 적용 및 결제 수단에 따라 최종 금액이 변결될 수 있습니다.
      </St.SubText>
      <St.FinalPaymentInfo>
        <h2>결제 예상금액</h2>
        <span>{finalPrice.toLocaleString()}원</span>
      </St.FinalPaymentInfo>
      <St.FinalButtons>
        <button type="button">
          <img src={CartGiftIcon} alt="선물하기 아이콘"></img>선물하기
        </button>
        <button className="pay" type="button">
          구매하기 ({totalQuantity})
        </button>
      </St.FinalButtons>
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
  SubText: styled.small`
    display: flex;
    align-items: center;

    width: 100%;
    padding-bottom: 1.5rem;

    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    color: ${({ theme }) => theme.colors.gray_300};
    ${({ theme }) => theme.fonts.Body3}

    img {
      margin-right: 0.5rem;
    }
  `,
  FinalPaymentInfo: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 1.7rem 0;

    color: ${({ theme }) => theme.colors.gray_900};

    h2 {
      ${({ theme }) => theme.fonts.Title1};
    }

    span {
      ${({ theme }) => theme.fonts.Head2};
      color: ${({ theme }) => theme.colors.red_500};
    }
  `,
  FinalButtons: styled.div`
    display: flex;
    gap: 0.5rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;

      width: 100%;
      height: 4.4rem;

      background: ${({ theme }) => theme.colors.gray_000};
      color: ${({ theme }) => theme.colors.red_300};
      ${({ theme }) => theme.fonts.Head4}
      border:0.1rem solid ${({ theme }) => theme.colors.red_300};
      border-radius: 0.5rem;
    }

    .pay {
      background: ${({ theme }) => theme.colors.red_300};
      color: ${({ theme }) => theme.colors.gray_000};
    }
  `,
};

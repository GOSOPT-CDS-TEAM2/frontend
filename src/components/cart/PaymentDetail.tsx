import styled from 'styled-components';
const PaymentDetail = () => {
  return (
    <St.PaymentDetailContainer>
      <St.PaymentInfoList>
        <St.PaymentInfo>
          <h2>총 상품금액</h2>
          <span>71,900원</span>
        </St.PaymentInfo>
        <St.PaymentInfo>
          <h2>총 할인금액</h2>
          <span>71,900원</span>
        </St.PaymentInfo>
        <St.PaymentInfo>
          <h2>총 배송비</h2>
          <span>71,900원</span>
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

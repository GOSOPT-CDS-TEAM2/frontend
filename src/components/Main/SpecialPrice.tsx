import styled from 'styled-components';

import { AlarmIcon } from '../../assets/icon';
import { DigitalTimeImg } from '../../assets/image';
import Product from '../Common/Product';

import { SPECIAL_DATA } from './constant/SpecialProductData';

const SpecialPrice = () => {
  const productList = SPECIAL_DATA.map((item) => {
    return <Product key={item.name} productData={item} />;
  });

  return (
    <St.SpecialPriceContainer>
      <header>
        <St.Title>오늘의 특가</St.Title>
        <div>
          <img src={AlarmIcon} alt="시계 아이콘" width={18} height={18} />
          <img src={DigitalTimeImg} alt="시간 표시" height={14} />
        </div>
      </header>
      <St.ProductContainer>{productList}</St.ProductContainer>
      <div className="buttonContainer">
        <St.MoreButton>오늘의 특가 상품 더 보러 가기 {'>'}</St.MoreButton>
      </div>
    </St.SpecialPriceContainer>
  );
};

export default SpecialPrice;

const St = {
  SpecialPriceContainer: styled.section`
    margin-top: 2.6rem;

    & > header {
      display: flex;
      justify-content: space-between;

      & > div {
        display: flex;
        align-items: center;
        gap: 0.7rem;

        margin-right: 2rem;
      }
    }

    & > div.buttonContainer {
      display: flex;
      justify-content: center;

      width: 100vw;
    }
  `,
  Title: styled.h1`
    margin-top: 0.4rem;
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  ProductContainer: styled.section`
    display: flex;
    gap: 0.7rem;

    width: 100vw;

    margin-top: 1.6rem;
    padding: 0 1.4rem;

    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  MoreButton: styled.button`
    width: 21.1rem;
    height: 3.9rem;

    margin-top: 1.5rem;

    border-radius: 1.9rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    background: none;

    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_700};
  `,
};

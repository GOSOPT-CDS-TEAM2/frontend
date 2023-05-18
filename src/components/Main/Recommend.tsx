import styled from 'styled-components';

import { ArrowIcon } from '../../assets/icon';
import { ProductData } from '../../types/common';
import Product from '../Common/Product';

const USER = '황현진';
// 더미 데이터
const PRODUCT_DATA: ProductData[] = [
  {
    name: '[필리밀리X네고왕] 필리밀리 아이브러시 프로 컬렉션 (5종)',
    originalPrice: 28000,
    discountRate: 53,
    discountPrice: 12900,
    image: 'https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017087822ko.jpg?l=ko',
    likeTF: true,
    tags: {
      BEST: true,
      단독: true,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    name: '콜레올로지 600mg * 30+10정 추가증정',
    originalPrice: 22000,
    discountRate: 21,
    discountPrice: 17900,
    image: 'https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017087822ko.jpg?l=ko',
    likeTF: false,
    tags: {
      BEST: true,
      단독: true,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    name: '웨이크메이크 네일케어 8종 모아보기',
    originalPrice: 5000,
    discountRate: 0,
    discountPrice: 5000,
    image: 'https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017087822ko.jpg?l=ko',
    likeTF: true,
    tags: {
      BEST: true,
      단독: true,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
];

const Recommend = () => {
  const productList = PRODUCT_DATA.map((item) => {
    return <Product key={item.name} productData={item} />;
  });
  return (
    <St.RecommendContainer>
      <St.Header>
        <St.Title>{USER}님을 위한 추천 상품</St.Title>
        <St.MoreButton type="button">
          더보기
          <img src={ArrowIcon} alt="더보기 아이콘" width={24} height={24} />
        </St.MoreButton>
      </St.Header>
      <St.ProductContainer>{productList}</St.ProductContainer>
    </St.RecommendContainer>
  );
};

export default Recommend;

const St = {
  RecommendContainer: styled.section`
    width: 100vw;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;

    margin-left: 1.4rem;
  `,
  Title: styled.h1`
    margin-top: 2.3rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  MoreButton: styled.button`
    display: flex;
    align-items: center;

    height: 2.4rem;

    margin-top: 3.1rem;
    margin-right: 0.7rem;
    padding: 0;

    background: none;
    border: none;
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_500};

    line-height: 0;
  `,
  ProductContainer: styled.section`
    display: flex;
    gap: 0.7rem;

    margin-top: 0.4rem;

    padding-left: 1.4rem;

    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

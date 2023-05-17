import { useState } from 'react';
import styled from 'styled-components';

import { ProductData } from '../../types/common';

import RankProduct from './RankProduct';

const CATEGORY_LIST = ['바디케어', '헤어케어', '향수/디퓨저', '미용소품', '남성', '식품', '반려동물'];

// 더미데이터
const RANKING_DATA: ProductData[] = [
  {
    name: '[단독기획] 줄라이미 페르소나 퍼퓸 50ml 단품/기획 6종',
    originalPrice: 49000,
    discountRate: 24,
    discountPrice: 36900,
    image: 'https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017087822ko.jpg?l=ko',
    likeTF: true,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    name: '[NEW] 끌로에 EDP 50ml + 바디로션 100ml 기획',
    originalPrice: 49000,
    discountRate: 24,
    discountPrice: 36900,
    image: 'https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017087822ko.jpg?l=ko',
    likeTF: false,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    name: '포맨트 시그니처 퍼퓸 코튼허그 50ml 기획 (+핸드크림 30ml 증정)',
    originalPrice: 49000,
    discountRate: 24,
    discountPrice: 36900,
    image: 'https://image.oliveyoung.co.kr/uploads/images/goods/10/0000/0017/A00000017087822ko.jpg?l=ko',
    likeTF: true,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
];

const CategoryRank = () => {
  const [selectedCategory, setSelectedCategory] = useState('향수/디퓨저');

  const handleOnClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedCategory(e.currentTarget.id);
  };
  const renderCategoryList = CATEGORY_LIST.map((item) => {
    return (
      <St.Category key={item} className={item === selectedCategory ? 'selected' : ''} id={item} onClick={handleOnClick}>
        {item}
      </St.Category>
    );
  });
  const renderProductList = RANKING_DATA.map((item) => {
    return <RankProduct key={item.name} productData={item} />;
  });
  return (
    <St.CategoryRankContainer>
      <header>
        <St.Title>카테고리 랭킹</St.Title>
        <St.CategoryContainer>
          <St.ScrollContainer>
            <div />
            {renderCategoryList}
          </St.ScrollContainer>
        </St.CategoryContainer>
      </header>
      <St.ProductContainer>{renderProductList}</St.ProductContainer>
    </St.CategoryRankContainer>
  );
};

export default CategoryRank;

const St = {
  CategoryRankContainer: styled.section`
    position: relative;

    margin: 3.4rem 0 2rem;
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  CategoryContainer: styled.ul`
    width: 100vw;

    margin-top: 0.6rem;

    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
  ScrollContainer: styled.div`
    display: flex;
    gap: 0.6rem;

    width: 58rem;

    padding: 0 1.4rem;
  `,
  Category: styled.li`
    display: flex;
    align-items: center;

    height: 3rem;

    padding: 0 1.6rem;

    border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
    border-radius: 1.8rem;

    background: none;
    color: ${({ theme }) => theme.colors.gray_500};
    ${({ theme }) => theme.fonts.SubTitle2};

    &.selected {
      border: 0.1rem solid ${({ theme }) => theme.colors.gray_000};
      color: ${({ theme }) => theme.colors.gray_000};
      background-color: ${({ theme }) => theme.colors.gray_900};
    }
  `,
  ProductContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 35rem;

    margin-top: 2.1rem;
    margin-left: 1.5rem;
  `,
};

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ProductServerData } from '../../types/main';
import { getRangkingData } from '../../utils/lib/main';

import HorizontalProduct from './HorizontalProduct';

const CATEGORY_LIST = ['바디케어', '헤어케어', '향수/디퓨저', '미용소품', '남성', '식품', '반려동물'];

const TAG_DATA = [
  {
    tags: {
      BEST: true,
      단독: true,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    tags: {
      BEST: true,
      단독: true,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    tags: {
      BEST: true,
      단독: true,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
];

const CategoryRank = () => {
  const [rankData, setRankData] = useState<ProductServerData[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('향수/디퓨저');

  const handleOnClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedCategory(e.currentTarget.id);
  };

  const getRankingDataList = async (category: string) => {
    const {
      data: { data },
    } = await getRangkingData(category);
    setRankData(data);
  };

  useEffect(() => {
    let category;
    switch (selectedCategory) {
      case '향수/디퓨저':
        category = 'perfumeanddefuser';
        break;
      case '바디케어':
        category = 'bodycare';
        break;
      case '식품':
        category = 'food';
        break;
      default:
        category = '';
        break;
    }
    getRankingDataList(category);
  }, [selectedCategory]);

  const renderCategoryList = CATEGORY_LIST.map((item) => {
    return (
      <St.Category key={item} className={item === selectedCategory ? 'selected' : ''} id={item} onClick={handleOnClick}>
        {item}
      </St.Category>
    );
  });
  const renderProductList = rankData.map((item, idx) => {
    const productData = { ...item, ...TAG_DATA[idx] };
    return <HorizontalProduct key={item.name} productData={productData} />;
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
    align-items: center;
    gap: 3rem;

    width: 100vw;

    margin-top: 2.1rem;
  `,
};

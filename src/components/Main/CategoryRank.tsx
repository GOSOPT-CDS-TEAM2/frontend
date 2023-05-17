import { useState } from 'react';
import styled from 'styled-components';

const CATEGORY_LIST = ['바디케어', '헤어케어', '향수/디퓨저', '미용소품', '남성', '식품', '반려동물'];

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
      <St.ProductContainer></St.ProductContainer>
    </St.CategoryRankContainer>
  );
};

export default CategoryRank;

const St = {
  CategoryRankContainer: styled.section`
    position: relative;

    margin-top: 3.4rem;
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  CategoryContainer: styled.ul`
    width: 100vw;
    height: 3rem;

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
  ProductContainer: styled.div``,
};

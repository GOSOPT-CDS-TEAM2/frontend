import { useState } from 'react';
import styled from 'styled-components';

import { ArrowIcon } from '../../assets/icon';
import { AdHotEventImg } from '../../assets/image';

const HotEvent = () => {
  const [selectedCategory, setSelectedCategory] = useState('지미추&몽블랑');
  const handleOnClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelectedCategory(e.currentTarget.id);
  };

  const renderCategoryList = ['산뜻진정더마토리', '지미추&몽블랑', '천재만재보습로션'].map((item) => {
    return (
      <St.Category key={item} className={item === selectedCategory ? 'selected' : ''} id={item} onClick={handleOnClick}>
        {item}
      </St.Category>
    );
  });
  return (
    <St.HotEventContainer>
      <header>
        <div>
          <St.Title>인기 행사만 모았어요!</St.Title>
          <St.MoreButton type="button">
            더보기
            <img src={ArrowIcon} alt="더보기 아이콘" width={24} height={24} />
          </St.MoreButton>
        </div>
        <St.CategoryContainer>
          <div />
          {renderCategoryList}
        </St.CategoryContainer>
      </header>
      <St.ContentContainer>
        <img src={AdHotEventImg} alt="인기 행사 광고 이미지" />
      </St.ContentContainer>
    </St.HotEventContainer>
  );
};

export default HotEvent;

const St = {
  HotEventContainer: styled.section`
    margin-top: 4.8rem;

    & > header > div {
      display: flex;
      justify-content: space-between;
    }
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  CategoryContainer: styled.ul`
    display: flex;
    justify-content: center;
    gap: 0.6rem;

    margin-top: 1rem;
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
  MoreButton: styled.button`
    display: flex;
    align-items: center;

    height: 2.4rem;

    margin-right: 0.7rem;
    padding: 0;

    background: none;
    border: none;
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_500};

    line-height: 0;
  `,
  ContentContainer: styled.div`
    width: 100vw;

    margin-top: 1.7rem;
    padding: 0 1.5rem;

    & > img {
      width: 100%;
    }
  `,
};

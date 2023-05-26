import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BrandSortIcon, BrandSortReverseIcon } from '../../assets/icon';
import { BrandData } from '../../types/brand';
import { getBrandData } from '../../utils/lib/brand';

import PremiumBrandCard from './PremiumBrandCard';

const PremiumBrand = () => {
  const [premiumBrandList, setPremiumBrandList] = useState<BrandData[]>([]);
  const [isAscending, setIsAscending] = useState<boolean>(true);
  const [showLikedOnly, setShowLikedOnly] = useState<boolean>(false);

  const getBrandList = async () => {
    try {
      const { data: { data } } = await getBrandData();
      sortBrandList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrandList();
  }, []);

  const sortBrandList = (list: BrandData[]) => {
    const sortedList = [...list].sort((a, b) => {
      return isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    });

    setPremiumBrandList(sortedList);
  };

  useEffect(() => {
    sortBrandList(premiumBrandList);
  }, [isAscending]);
  
  useEffect(() => {
    getBrandList();
  }, [showLikedOnly]);

  const filteredBrandList = showLikedOnly
    ? premiumBrandList.filter((brand) => brand.likeTF)
    : premiumBrandList;

  const PremiumBrands = filteredBrandList.map((brand) => {
    return <PremiumBrandCard key={brand.id} brand={brand} />;
  });

  return (
    <St.PremiumBrandContainer>
      <St.Header> 프리미엄 브랜드 </St.Header>

      <St.SortContainer>
        <St.AllButton type="button" onClick={() => {setShowLikedOnly(!showLikedOnly);}} className={showLikedOnly ? '' : 'active'}>
          전체
        </St.AllButton>
        <St.OrIcon>|</St.OrIcon>
        <St.LikeButton type="button" onClick={() => {setShowLikedOnly(!showLikedOnly);}} className={showLikedOnly ? 'active' : ''}>
          좋아요
        </St.LikeButton>
        <St.SortButton type="button" onClick={() => {setIsAscending(!isAscending);}}>
          {isAscending ? (
            <img src={BrandSortIcon} alt="브랜드 ㄱ-ㅎ 정렬" />
          ) : (
            <img src={BrandSortReverseIcon} alt="브랜드 ㅎ-ㄱ 정렬" />
          )}
        </St.SortButton>
      </St.SortContainer>

      <St.ImgContainer>{PremiumBrands}</St.ImgContainer>
    </St.PremiumBrandContainer>
  );
};

export default PremiumBrand;

const St = {

  PremiumBrandContainer: styled.section`
    display: flex;
    flex-direction: column;

    width: 100vw;
    padding: 1.7rem 0rem 1.7rem 1.7rem;
  `,

  Header: styled.h1`
    display: flex;

    width: 100vw;
    height: 2.0rem;
    margin: 0.7rem 25.9rem 1.6rem 0rem;
    
    ${({ theme }) => theme.fonts.SubHead1};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  SortContainer: styled.div`
    display: flex;
  `,

  AllButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.7rem;
    margin: 0.3rem 0.7rem 1.9rem 0rem;
    padding: 0rem;
    
    ${({ theme }) => theme.fonts.SubTitle1};
    color: ${({ theme }) => theme.colors.gray_300};
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
    
    &.active {
      color: ${({ theme }) => theme.colors.red_300};
    }
  `,

  OrIcon: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 1.7rem;
    margin: 0.3rem 0rem 1.9rem 0rem;
    
    ${({ theme }) => theme.fonts.SubTitle1};
    color: ${({ theme }) => theme.colors.gray_200};
  `,

  LikeButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 1.7rem;
    margin: 0.3rem 1.0rem 1.9rem 0.7rem;
    padding: 0rem;

    ${({ theme }) => theme.fonts.SubTitle1};    
    color: ${({ theme }) => theme.colors.gray_300};
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;

    &.active {
      color: ${({ theme }) => theme.colors.red_300};
    }
  `,

  SortButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7.5rem;
    height: 2.4rem;
    margin-bottom: 1rem;
    
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
  `,

  ImgContainer: styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 0.7rem;
    
    width: 100%;

    overflow-x: auto;
    overflow-y: hidden; 
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

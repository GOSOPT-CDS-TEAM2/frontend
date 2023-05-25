import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BrandSortIcon, BrandSortReverseIcon, PremiumCardLikeFillIcon, PremiumCardLikeIcon } from '../../assets/icon';
import { BrandData } from '../../types/brand'; // BrandData import 추가
import { getBrandData, postBrandData } from '../../utils/lib/brand';

import PremiumBrandCard from './PremiumBrandCard';

const PremiumBrand = () => {
  
  // 1. API 연결하여 브랜드 리스트 받아오기
  
  const [PremiumBrandList, setBrandList] = useState<BrandData[]>([]); 

  const getBrandList = async () => {
    try {
      const { data: { data } } = await getBrandData();
      setBrandList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrandList();
  }, []);
  
  // 2. 정렬 버튼 누르면 정렬

  const [isAscending, setIsAscending] = useState<boolean>(true);
  
  const SortBrandList = () => {
    const sortedList = [...PremiumBrandList].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (isAscending) {
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
      } else {
        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
      }

      return 0;
    });

    setBrandList(sortedList);
    setIsAscending(!isAscending);
  };

  // 4. 전체/좋아요 랜더링
  const [showLikedOnly, setShowLikedOnly] = useState<boolean>(false);
  
  const ShowAll = () => {
    getBrandList();
    setShowLikedOnly(false);
  };

  const ShowLike = () => {
    getBrandList();
    setShowLikedOnly(true);
  };

  const filteredBrandList = showLikedOnly
    ? PremiumBrandList.filter((brand) => brand.likeTF)
    : PremiumBrandList;

  // 3. API 연결하여 좋아요 / 좋아요 취소 버튼

  const PremiumBrands = filteredBrandList.map((brand) => {
    return <PremiumBrandCard key ={brand.id} brand = {brand} />;
  });
  return (
    <St.PremiumBrandContainer>
      <St.Header> 프리미엄 브랜드 </St.Header>
      <St.SortContainer>
        <St.AllButton type = "button"  onClick = {ShowAll} className={showLikedOnly ? '' : 'active'} >
          전체 
        </St.AllButton>
        <St.OrIcon>
          |
        </St.OrIcon>
        <St.LikeButton type = "button" onClick = {ShowLike} className={showLikedOnly ? 'active' : ''}>
          좋아요
        </St.LikeButton>
        <St.SortButton type = "button" onClick = {SortBrandList}>
          {isAscending ? <img src={BrandSortIcon} alt = "브랜드 ㄱ-ㅎ 정렬"/>
            : <img src={BrandSortReverseIcon} alt = "브랜드 ㅎ-ㄱ 정렬"/>}
        </St.SortButton>
      </St.SortContainer>
      <St.ImgContainer>
        {PremiumBrands}
      </St.ImgContainer>
    </St.PremiumBrandContainer>
  );
};

export default PremiumBrand;

const St = {

  PremiumBrandContainer: styled.section`
    display: flex;
    flex-direction: column;

    width: 100vw;
    padding: 1.7rem;
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
    
    &.active {
      color: ${({ theme }) => theme.colors.red_300};
    }
    
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
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
    &.active {
      color: ${({ theme }) => theme.colors.red_300};
    }
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
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
    
    width: 100vw;

    gap: 0.7rem;

    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

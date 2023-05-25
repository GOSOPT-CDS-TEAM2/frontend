import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BrandSortIcon, BrandSortReverseIcon, PremiumCardLikeIcon } from '../../assets/icon';
import { BrandData } from '../../types/brand'; // BrandData import 추가
import { getBrandData, postBrandData } from '../../utils/lib/brand';

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

  // 3. API 연결하여 좋아요 / 좋아요 취소 버튼

  const SendLikeRequest = async (brandId: number) => {
    try {
      const response = await postBrandData(brandId);
      console.log(response.data); 
    } catch (error) {
      console.error(error);
    }
  };

  const PremiumbBrands = PremiumBrandList.map((brand) => {
    return (
      <St.Img key = {brand.id}>
        <img className = "back" src = {brand.image} alt = "이미지"/>
        <img className = "front" src = {brand.logoImage} alt = "이미지"/>
        <div />
        <button onClick = {() => SendLikeRequest(brand.id)}>
          <img className = "heart" src = {PremiumCardLikeIcon} alt = "좋아요 아이콘" />
        </button>
        <h1> {brand.name} </h1>
      </St.Img>
    );
  });

  return (
    <St.PremiumBrandContainer>
      <St.Header> 프리미엄 브랜드 </St.Header>
      <St.SortContainer>
        <St.AllButton>
          전체 
        </St.AllButton>
        <St.OrIcon>
          |
        </St.OrIcon>
        <St.LikeButton>
          좋아요
        </St.LikeButton>
        <St.SortButton type = "button" onClick = {SortBrandList}>
          {isAscending ? <img src={BrandSortIcon} alt = "브랜드 이름 정렬"/>
            : <img src={BrandSortReverseIcon} alt = "브랜드 이름 정렬"/>}
        </St.SortButton>
      </St.SortContainer>
      <St.ImgContainer>
        {PremiumbBrands}
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
    color: ${({ theme }) => theme.colors.red_300};
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

  Img : styled.div`
    position: relative;
    width : 9.5rem;
    height: 13.5rem;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;


    .back {
      object-fit: cover;
      width : 9.5rem;
      height: 13.5rem;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }

    .front {
      max-width: 5.5rem;
      height: 1.1rem;
      position: absolute;
      top: 5.2rem;
      left: 50%;
      transform: translateX(-50%);
      filter: brightness(0) invert(1);
      z-index: 2;
      object-fit: contain;
    }

    button {
      background : none;
      border: none;
      padding: none;
    }
    .heart {
      position: absolute;
      top: 0.7rem;
      left: 7.5rem;
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      width : 9.5rem;
      height: 13.5rem;
      background-color:  ${({ theme }) => theme.colors.gray_900};
      opacity: 0.6;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }

    h1 {
      position: absolute;
      top: 10.4rem;
      left: 50%;
      transform: translateX(-50%);
      ${({ theme }) => theme.fonts.SubTitle3};
    color: ${({ theme }) => theme.colors.gray_000};
    }
  `,
};

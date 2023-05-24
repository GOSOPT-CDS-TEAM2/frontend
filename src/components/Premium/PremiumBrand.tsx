import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BrandNameListIcon } from '../../assets/icon';
import { 꼬달리Img, 다비네스Img, 달팜Img, 더바디샵Img } from '../../assets/image';
import { BrandData } from '../../types/brand'; // BrandData import 추가
import { getBrandData } from '../../utils/lib/brand';

const PremiumBrand = () => {
  
  const [PremiumBrandList, setBrandList] = useState<BrandData[]>([]); 

  const getBrandList = async () => {
    try {
      const { data: { data } } = await getBrandData();
      setBrandList(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrandList();
  }, []);

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
        <St.SortButton type = "button">
          <img src={BrandNameListIcon} alt = "브랜드 이름 정렬"/>
        </St.SortButton>
      </St.SortContainer>
      <St.ImgContainer>
        {PremiumBrandList.map((brand, i) => (
          <img key = {i} src = {brand.logoImage} alt = "이미지"/>
        ))}
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

    width: 9.9rem;
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
  `,
};

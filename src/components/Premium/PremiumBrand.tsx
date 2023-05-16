import styled from 'styled-components';

import { AllLikeIcon, BrandNameListIcon } from '../../assets/icon';
import { Component185Img, Component186Img, Component187Img, Component188Img } from '../../assets/image';

const PremiumBrand = () => {
  return (
    <St.PremiumBrandContainer>
      <St.Header> 프리미엄 브랜드 </St.Header>
      <St.SortContainer>
        <St.AllLikeButton>
          <img src={AllLikeIcon} alt = "전체/좋아요" />
        </St.AllLikeButton>
        <St.SortButton>
          <img src={BrandNameListIcon} alt = "브랜드 이름 정렬"/>
        </St.SortButton>
      </St.SortContainer>
      <St.ImgContainer>
        <img src = {Component185Img} alt = "꼬달리" />
        <img src = {Component186Img} alt = "다비네스" />
        <img src = {Component187Img} alt = "달팡" />
        <img src = {Component188Img} alt = "더바디샵" />
      </St.ImgContainer>
    </St.PremiumBrandContainer>
  );
};

export default PremiumBrand;

const St = {

  PremiumBrandContainer: styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    padding: 1.7rem;
    width: 100%;

  `,

  Header: styled.header`
    display: flex;
    justify-content: flex-start;

    width: 9.9rem;
    height: 2.0rem;
    
    ${({ theme }) => theme.fonts.SubHead1};
    ${({ theme }) => theme.colors.gray_900};
    
    letter-spacing: -0.02em;
    margin: 0.7rem 25.9rem 1.6rem 0rem;
  `,

  SortContainer: styled.section`
    display: flex;
    flex-direction: row;
    margin: 0rem;
    padding: 0rem;
  `,

  AllLikeButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7.2rem;
    height: 1.7rem;
    
    margin: 0.3rem 1.0rem 1.9rem 0rem;
    background-color: white;
    border: none;
  `,

  SortButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7.5rem;
    height: 2.4rem;
    
    margin: 0rem 0rem 1.rem 0rem;
    background-color: white;
    border: none;
  `,

  ImgContainer: styled.section`
    display: flex;
  `,
};

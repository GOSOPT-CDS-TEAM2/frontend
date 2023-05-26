import { useState } from 'react';
import styled from 'styled-components';

import { PremiumCardLikeFillIcon, PremiumCardLikeIcon } from '../../assets/icon';
import { BrandData } from '../../types/brand'; // BrandData import 추가
import { postBrandData } from '../../utils/lib/brand';

const PremiumBrandCard = (props: {brand: BrandData}) => {
  
  const { brand } = props;
  
  const [likeBtn, setLikeBtn] = useState(brand.likeTF);

  const SendLikeRequest = async (brandId: number) => {
    try {
      const response = await postBrandData(brandId);
      setLikeBtn(!likeBtn);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <St.Img key = {brand.id}>
      <St.Back className = "back" src = {brand.image} alt = "이미지"/>
      <St.Front className = "front" src = {brand.logoImage} alt = "이미지"/>
      <div />
      <St.LikeButton onClick = {() => SendLikeRequest(brand.id)}>
        {likeBtn ? (
          <img className="heart" src={PremiumCardLikeFillIcon} alt="좋아요 채워진 아이콘" />
        ) : (
          <img className="heart" src={PremiumCardLikeIcon} alt="좋아요 빈 아이콘" />
        )}
      </St.LikeButton>
      <St.BrandName> {brand.name} </St.BrandName>
    </St.Img>
  );
};

export default PremiumBrandCard;
const St = { 
  Img : styled.div`
    position: relative;
    
    width : 9.5rem;
    height: 13.5rem;
    
    box-shadow: 0rem 0rem 0.3rem  rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    
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
      box-shadow: 0rem 0rem 0.3rem rgba(0, 0, 0, 0.25);
      border-radius: 0.5rem;
    }
  `,
  
  Back : styled.img`
  width : 9.5rem;
  height: 13.5rem;
  object-fit: cover;
  
  box-shadow: 0rem 0rem 0.3rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  `,

  Front: styled.img`
  position: absolute;
  top: 5.2rem;
  left: 50%;
  
  height: 1.1rem;
  max-width: 5.5rem;
  
  object-fit: contain;
  
  transform: translateX(-50%);
  filter: brightness(0) invert(1);
  z-index: 2;
  `,
  
  LikeButton: styled.button`
  padding: none;
  background : none;
  border: none;
  `,
  
  BrandName: styled.h1`
  position: absolute;
  top: 10.4rem;
  left: 50%;
  
  transform: translateX(-50%);
  ${({ theme }) => theme.fonts.SubTitle3};
  color: ${({ theme }) => theme.colors.gray_000};
  `,
};

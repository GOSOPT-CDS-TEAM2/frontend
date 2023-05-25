import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BrandSortIcon, BrandSortReverseIcon, PremiumCardLikeFillIcon, PremiumCardLikeIcon } from '../../assets/icon';
import { BrandData } from '../../types/brand'; // BrandData import 추가
import { getBrandData, postBrandData } from '../../utils/lib/brand';

const PremiumBrandCard = (props: {brand: BrandData}) => {
  const { brand } = props;
  const [likeBtn, setLikeBtn] = useState(brand.likeTF);

  const SendLikeRequest = async (brandId: number) => {
    try {
      const response = await postBrandData(brandId);
      setLikeBtn(!likeBtn);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <St.Img key = {brand.id}>
      <img className = "back" src = {brand.image} alt = "이미지"/>
      <img className = "front" src = {brand.logoImage} alt = "이미지"/>
      <div />
      <button onClick = {() => SendLikeRequest(brand.id)}>
        {likeBtn ? (
          <img className="heart" src={PremiumCardLikeFillIcon} alt="좋아요 채워진 아이콘" />
        ) : (
          <img className="heart" src={PremiumCardLikeIcon} alt="좋아요 빈 아이콘" />
        )}
      </button>
      <h1> {brand.name} </h1>
    </St.Img>
  );
};

export default PremiumBrandCard;
const St = { 
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

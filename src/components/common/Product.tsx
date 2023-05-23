
import { useState } from 'react';
import styled from 'styled-components';

import { BagGrayIcon, HeartFillIcon, HeartIcon } from '../../assets/icon';
import { ProductProps } from '../../types/common';

import ProductTag from './ProductTag';

const Product = (props: ProductProps) => {
  const {
    productData: { name, originalPrice, discountRate, discountPrice, image, likeTF, tags },
  } = props;

  const [heart, setHeart] = useState(likeTF);

  // tags 검사해서 tagList에 넣기
  const tagList = [];
  for (const [key, value] of Object.entries(tags)) {
    value && tagList.push(key);
  }

  const renderList = tagList.map((item) => {
    return <ProductTag key={item}>{item}</ProductTag>;
  });

  return (
    <St.ProductContainer>
      <img src={image} alt="상품 이미지" width={135} height={138} />
      <St.ProductName>{name}</St.ProductName>
      <St.OriginalPrice>{originalPrice.toLocaleString()}원</St.OriginalPrice>

      <St.DisCountContainer>
        <St.DiscountRate>{discountRate}%</St.DiscountRate>
        <St.DiscountPrice>{discountPrice.toLocaleString()}원</St.DiscountPrice>
      </St.DisCountContainer>

      <St.ProductTagContainer>{renderList}</St.ProductTagContainer>

      <St.IconContainer>
        <button type="button" onClick={() => setHeart(!heart)}>
          <img src={heart ? HeartFillIcon : HeartIcon} alt="하트 아이콘" width={35} height={36} />
        </button>
        <img src={BagGrayIcon} alt="장바구니 아이콘" width={35} height={36} />
      </St.IconContainer>
    </St.ProductContainer>
  );
};

export default Product;

const St = {
  ProductContainer: styled.article`
    display: flex;
    flex-direction: column;

    width: 13.5rem;
    height: 29.7rem;

    & > img {
      border-radius: 0.4rem;
    }
  `,
  ProductName: styled.header`
    width: 12.6rem;

    margin-top: 1.1rem;

    ${({ theme }) => theme.fonts.SubTitle2};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  /* 기존 가격 */
  OriginalPrice: styled.s`
    margin-top: 0.5rem;

    color: ${({ theme }) => theme.colors.gray_300};
    ${({ theme }) => theme.fonts.Body2};
  `,

  /* 할인 */
  DisCountContainer: styled.div`
    display: flex;
    gap: 0.4rem;
  `,
  DiscountRate: styled.span`
    color: ${({ theme }) => theme.colors.red_300};
    ${({ theme }) => theme.fonts.SubTitle1};
  `,

  DiscountPrice: styled.span`
    color: ${({ theme }) => theme.colors.gray_900};
    ${({ theme }) => theme.fonts.SubTitle1};
  `,

  /* 태그 */
  ProductTagContainer: styled.div`
    display: flex;
    gap: 0.4rem;

    margin-top: 0.9rem;
  `,

  /* 아이콘 */
  IconContainer: styled.div`
    display: flex;
    gap: 0.6rem;

    margin-top: 0.8rem;
    & > button {
      width: 3.5rem;
      height: 3.6rem;

      padding: 0;

      border: none;
      background: none;
    }
  `,
};

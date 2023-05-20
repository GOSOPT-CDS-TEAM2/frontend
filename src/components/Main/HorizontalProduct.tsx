import { useState } from 'react';
import styled from 'styled-components';

import { BagRankIcon, HeartRankFillIcon, HeartRankIcon } from '../../assets/icon';
import { ProductProps } from '../../types/common';
import ProductTag from '../Common/ProductTag';

const HorizontalProduct = (props: ProductProps) => {
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
    <St.RankProductContainer>
      <img src={image} alt="상품 이미지" width={73} height={72} />
      <St.ProductInfo>
        <St.ProductName>{name}</St.ProductName>

        <St.PriceContainer>
          <St.DiscountRate>{discountRate}%</St.DiscountRate>
          <St.DiscountPrice>{discountPrice.toLocaleString()}원</St.DiscountPrice>

          <St.OriginalPrice>{originalPrice.toLocaleString()}원</St.OriginalPrice>
        </St.PriceContainer>

        <St.ProductTagContainer>{renderList}</St.ProductTagContainer>
      </St.ProductInfo>

      <St.IconContainer>
        <button type="button" onClick={() => setHeart(!heart)}>
          <img src={heart ? HeartRankFillIcon : HeartRankIcon} alt="하트 아이콘" width={20} height={20} />
        </button>
        <img src={BagRankIcon} alt="장바구니 아이콘" width={20} height={20} />
      </St.IconContainer>
    </St.RankProductContainer>
  );
};

export default HorizontalProduct;

const St = {
  RankProductContainer: styled.article`
    display: flex;

    & > img {
      border-radius: 0.5rem;
    }
  `,
  ProductInfo: styled.div`
    display: flex;
    flex-direction: column;

    width: 22.3rem;

    margin-left: 1.2rem;
  `,
  ProductName: styled.header`
    height: 3.2rem;

    ${({ theme }) => theme.fonts.SubTitle2};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  /* 가격 */
  PriceContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    height: 1.8rem;

    margin-top: 0.5rem;
  `,
  OriginalPrice: styled.s`
    color: ${({ theme }) => theme.colors.gray_300};
    ${({ theme }) => theme.fonts.Body2};

    height: 1.8rem;
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
    margin-top: 0.2rem;
  `,

  /* 아이콘 */
  IconContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.8rem;

    height: 6.8rem;

    margin-top: 0.6rem;
    margin-left: 1.7rem;

    & > button {
      width: 2rem;
      height: 2rem;

      padding: 0;

      border: none;
      background: none;
    }
  `,
};

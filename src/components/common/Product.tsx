import styled from 'styled-components';

import { BagGrayIcon, HeartIcon } from '../../assets/icon';

import ProductTag from './ProductTag';

interface ProductProps {
  imgUrl: string;
  ProductName: string;
  OriginalPrice: number;
  DiscountRate: number;
  DiscountPrice: number;
  tag: string[];
}

const Product = () => {
  return (
    <St.ProductContainer>
      <img src="" alt="상품 이미지" width={135} height={138} />
      <St.ProductName>[필리밀리X네고왕]필리밀리 아이브러시 프로 컬렉션(5종)</St.ProductName>
      <St.OriginalPrice>28,000원</St.OriginalPrice>
      <St.DiscountRate>53%</St.DiscountRate>
      <St.DiscountPrice>17,900원</St.DiscountPrice>

      <St.ProductTagContainer>
        <ProductTag>BEST</ProductTag>
        <ProductTag>단독</ProductTag>
        <ProductTag>오늘드림</ProductTag>
      </St.ProductTagContainer>

      <St.IconContainer>
        <img src={HeartIcon} alt="하트 아이콘" />
        <img src={BagGrayIcon} alt="장바구니 아이콘" />
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
  `,
  ProductName: styled.header`
    width: 12.6rem;

    ${({ theme }) => theme.fonts.SubTitle2};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  OriginalPrice: styled.span`
    margin-top: 0.5rem;

    color: ${({ theme }) => theme.colors.gray_300};

    text-decoration: line-through;
  `,
  DisCountContainer: styled.div`
    display: flex;
    gap: 0.4rem;
  `,
  DiscountRate: styled.span`
    color: ${({ theme }) => theme.colors.red_300};
  `,

  DiscountPrice: styled.span`
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  ProductTagContainer: styled.div`
    display: flex;
    gap: 0.4rem;

    margin-top: 0.9rem;
  `,
  IconContainer: styled.div`
    display: flex;
    gap: 0.6rem;

    & > img {
      width: 3.5rem;
      height: 3.6rem;
    }
  `,
};

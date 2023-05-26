import styled from 'styled-components';

import { BagGrayIcon, HeartIcon } from '../../assets/icon';
import { ProductProps } from '../../types/common';
import ProductTag from '../common/ProductTag';

const NewPopularProduct = (props: ProductProps) => {
  const {
    productData: { name, originalPrice, discountRate, discountPrice, image, tags },
  } = props;

  const tagList = Object.entries(tags)
    .filter(([value]) => value) // value가 true 인 것 filtering
    .map(([key]) => <ProductTag key={key}>{key}</ProductTag>);

  return (
    <St.ProductContainer>
      <St.Image src={image} alt={name} />
      <St.Name> {name} </St.Name>

      <St.OriginalPrice> {originalPrice.toLocaleString()}원 </St.OriginalPrice>
      <St.DiscountContainer>
        <St.DiscountRate> {discountRate}% </St.DiscountRate>
        <St.DiscountPrice> {discountPrice.toLocaleString()}원 </St.DiscountPrice>
      </St.DiscountContainer>

      <St.Tags> {tagList} </St.Tags>

      <St.IconContainer>
        <St.Icon src={HeartIcon} alt="하트 아이콘" />
        <St.Icon src={BagGrayIcon} alt="장바구니 아이콘" />
      </St.IconContainer>
    </St.ProductContainer>
  );
};

export default NewPopularProduct;

const St = {
  ProductContainer: styled.section`
    display: flex;
    flex-direction: column;

    width: 16.8rem;
    height: 32rem;
    margin-bottom: 2.1rem;
  `,

  Image: styled.img`
    width: 16.8rem;
    height: 16.7rem;

    border-radius: 0.4rem;
  `,

  Name: styled.h1`
    ${({ theme }) => theme.fonts.SubTitle3};
    color: ${({ theme }) => theme.colors.gray_900};

    width: 16.5rem;
    margin-top: 1.1rem;
  `,

  OriginalPrice: styled.s`
    height: 1.4rem;
    margin-top: 0.5rem;

    ${({ theme }) => theme.fonts.Body2};
    color: ${({ theme }) => theme.colors.gray_300};
  `,

  DiscountContainer: styled.div`
    margin-top: 0.3rem;
  `,

  DiscountRate: styled.span`
    margin-right: 0.5rem;
    ${({ theme }) => theme.fonts.SubTitle1};
    color: ${({ theme }) => theme.colors.red_300};
  `,

  DiscountPrice: styled.span`
    ${({ theme }) => theme.fonts.SubTitle1};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  Tags: styled.div`
    display: flex;
    height: 1.6rem;
    margin-top: 0.3rem;
    gap: 0.3rem;
  `,

  IconContainer: styled.div`
    display: flex;
    margin-top: 1.1rem;
  `,

  Icon: styled.img`
    width: 3.5rem;
    height: 3.6rem;
  `,
};

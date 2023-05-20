import styled from 'styled-components';

import { WeightProductProps } from '../../types/main';
import ProductTag from '../Common/ProductTag';

const WeightProduct = (props: WeightProductProps) => {
  const {
    productData: { name, discountRate, price, image, tags },
  } = props;

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
      <img src={image} alt="상품 이미지" width={113} height={109} />
      <St.ProductName>{name}</St.ProductName>

      <St.DisCountContainer>
        <St.DiscountRate>{discountRate}%</St.DiscountRate>
        <St.Price>{price.toLocaleString()}원</St.Price>
      </St.DisCountContainer>

      <St.ProductTagContainer>{renderList}</St.ProductTagContainer>
    </St.ProductContainer>
  );
};

export default WeightProduct;

const St = {
  ProductContainer: styled.article`
    display: flex;
    flex-direction: column;

    width: 11.3rem;
  `,
  ProductName: styled.header`
    width: 11.3rem;

    margin-top: 1.1rem;

    ${({ theme }) => theme.fonts.SubTitle2};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  /* 할인 */
  DisCountContainer: styled.div`
    display: flex;
    gap: 0.4rem;

    margin-top: 0.6rem;
  `,
  DiscountRate: styled.span`
    color: ${({ theme }) => theme.colors.red_300};
    ${({ theme }) => theme.fonts.SubTitle1};
  `,

  Price: styled.span`
    color: ${({ theme }) => theme.colors.gray_900};
    ${({ theme }) => theme.fonts.SubTitle1};
  `,

  /* 태그 */
  ProductTagContainer: styled.div`
    display: flex;
    gap: 0.4rem;

    margin-top: 0.7rem;
  `,
};

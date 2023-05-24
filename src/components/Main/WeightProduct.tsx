import styled from 'styled-components';

import { WeightProductData } from '../../types/main';
import ProductTag from '../common/ProductTag';

interface WeightProductProps extends WeightProductData {
  idx: number;
}

const WeightProduct = (props: WeightProductProps) => {
  const {
    productData: { name, discountRate, price, image, tags },
    idx,
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
      {!idx && <St.RemainTime>D-01:20</St.RemainTime>}
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
    position: relative;

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
  RemainTime: styled.div`
    position: absolute;
    z-index: 1;

    top: 0.5rem;
    left: 0.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 5.6rem;
    height: 1.4rem;

    border-radius: 0.7rem;

    ${({ theme }) => theme.fonts.Body1};
    color: ${({ theme }) => theme.colors.gray_900};
    background-color: ${({ theme }) => theme.colors.gray_000};
  `,
};

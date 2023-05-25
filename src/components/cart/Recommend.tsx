import styled from 'styled-components';

import { ArrowIcon } from '../../assets/icon';
import { RECOMMEND_DATA } from '../cart/constants/RecommendProductData';
import Product from '../common/Product';

const Recommend = () => {
  const productList = RECOMMEND_DATA.map((item) => {
    return <Product key={item.name} productData={item} />;
  });

  return (
    <St.RecommendContainer>
      <St.TitleContainer>
        <St.Title>함께 구매하면 좋은 추천 상품이에요</St.Title>
        <div className="more">
          <h3>더보기</h3>
          <img src={ArrowIcon} alt="더보기 아이콘"></img>
        </div>
      </St.TitleContainer>

      <St.ProductContainer>{productList}</St.ProductContainer>
    </St.RecommendContainer>
  );
};

export default Recommend;

const St = {
  RecommendContainer: styled.section`
    margin-bottom: 3rem;
    box-shadow: 0 -0.1rem 0 rgba(0, 0, 0, 0.05);
  `,
  Title: styled.h1`
    margin: 1.3rem 2rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  TitleContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .more {
      display: flex;
      align-items: center;

      width: max-content;
      margin-right: 0.3rem;

      ${({ theme }) => theme.fonts.SubTitle4};
      color: ${({ theme }) => theme.colors.gray_500};
    }
  `,
  ProductContainer: styled.section`
    display: flex;
    gap: 0.7rem;

    width: 100vw;

    padding: 0 2rem;

    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

import styled from 'styled-components';

import { ArrowIcon } from '../../assets/icon';

import { WEIGHT_PRODUCT } from './constant/WeightProductData';
import WeightProduct from './WeightProduct';

const WeightManagement = () => {
  const productList = WEIGHT_PRODUCT.map((item) => {
    return <WeightProduct key={item.name} productData={item} />;
  });

  return (
    <St.WeightManagementContainer>
      <header>
        <St.Title>
          체중관리에서
          <br />이 상품은 어떤가요?
        </St.Title>
        <St.MoreButton type="button">
          더보기
          <img src={ArrowIcon} alt="더보기 아이콘" width={24} height={24} />
        </St.MoreButton>
      </header>
      <St.ProductContainer>{productList}</St.ProductContainer>
    </St.WeightManagementContainer>
  );
};

export default WeightManagement;

const St = {
  WeightManagementContainer: styled.section`
    margin-top: 8.7rem;

    & > header {
      display: flex;
      justify-content: space-between;
    }
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  MoreButton: styled.button`
    display: flex;
    align-items: center;

    height: 2.4rem;

    margin-right: 0.7rem;
    margin-top: 2.2rem;
    padding: 0;

    background: none;
    border: none;
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_500};

    line-height: 0;
  `,
  ProductContainer: styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 11.3rem);
    column-gap: 0.5rem;
    row-gap: 3rem;

    width: 100vw;

    margin-top: 1.5rem;

    /* display: grid;
    justify-content: space-between;
    grid-template-columns: repeat(3, 11.3rem);
    row-gap: 3rem;

    width: 100vw;

    margin-top: 1.5rem;
    padding: 0 1.3rem; */
  `,
};
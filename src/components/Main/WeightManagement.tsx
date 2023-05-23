import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowIcon } from '../../assets/icon';

import { WEIGHT_PRODUCT } from './constant/WeightProductData';
import WeightProduct from './WeightProduct';

const WeightManagement = () => {
  SwiperCore.use([Pagination]);

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
      <Swiper
        pagination={{ clickable: true }} // 페이지네이션 옵션
        speed={650} // 슬라이드가 넘어가는 속도를 조정. 700ms
        threshold={0}>
        <SwiperSlide>
          <St.ProductContainer>{productList}</St.ProductContainer>
        </SwiperSlide>
        <SwiperSlide>
          <St.ProductContainer>{productList}</St.ProductContainer>
        </SwiperSlide>
      </Swiper>
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

    & > .swiper {
      margin-bottom: 3.7rem;

      & > .swiper-pagination {
        position: static;

        display: flex;
        justify-content: center;
        gap: 0.7rem;
      }

      & .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;

        margin-top: 2.3rem;

        background-color: ${({ theme }) => theme.colors.gray_300};
      }
      & .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.gray_700};
      }

      & > .swiper-wrapper {
        width: 100vw;

        margin-top: 1.5rem;
      }
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
  `,
};

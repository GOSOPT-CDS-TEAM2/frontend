import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ArrowIcon } from '../../assets/icon';
import { ProductServerData } from '../../types/common';
import { getRecommendData } from '../../utils/lib/main';
import Product from '../common/Product';

import { TAG_LIST } from './constants/TAG_LIST';

const USER = '황현진';

const Recommend = () => {
  const [recommendData, setRecommendData] = useState<ProductServerData[]>([]);

  // 데이터 조회 함수
  const getRecommendList = async () => {
    try {
      const {
        data: { data },
      } = await getRecommendData();
      setRecommendData(data);
    } catch (e) {
      console.log(e); // 에러 처리는 나중에 에러 페이지나 섹션으로 대체할 예정
    }
  };

  // 최초 렌더링 시 fetch
  useEffect(() => {
    getRecommendList();
  }, []);

  const productList = recommendData.map((item, idx) => {
    const productData = { ...item, ...TAG_LIST[idx] }; // 불러온 서버데이터에 tag데이터 합치기
    return <Product key={item.name} productData={productData} />;
  });

  return (
    <St.RecommendContainer>
      <St.Header>
        <St.Title>{USER}님을 위한 추천 상품</St.Title>
        <St.MoreButton type="button">
          더보기
          <img src={ArrowIcon} alt="더보기 아이콘" width={24} height={24} />
        </St.MoreButton>
      </St.Header>
      <St.ProductContainer>{productList}</St.ProductContainer>
    </St.RecommendContainer>
  );
};

export default Recommend;

const St = {
  RecommendContainer: styled.section`
    width: 100vw;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;

    margin-left: 1.4rem;
  `,
  Title: styled.h1`
    margin-top: 2.3rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  MoreButton: styled.button`
    display: flex;
    align-items: center;

    height: 2.4rem;

    margin-top: 3.1rem;
    margin-right: 0.7rem;

    padding: 0;

    background: none;
    border: none;
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_500};

    line-height: 0;
  `,
  ProductContainer: styled.section`
    display: flex;
    gap: 0.7rem;

    padding: 0 1.4rem;
    margin-top: 0.4rem;

    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  `,
};

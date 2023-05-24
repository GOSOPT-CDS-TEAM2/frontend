import styled from 'styled-components';

import { 더바디샵티트리오일, 록시땅로즈오드뚜왈렛, 비오템옴드모이스춰라이저, 비오템옴드젤로션, 오리진스앰플크림, 헤라파우더 } from '../../assets/image';
import { ProductData } from '../../types/common';

import NewPopularProduct from './NewPopularProduct';

const NewPopularList = () => {

  const ProductData: ProductData[] = [
    {
      name : '오리진스 MAD 플러스 리주버네이팅 수분 앰플 크림50ml',
      originalPrice: 54000,
      discountRate: 20,
      discountPrice: 43200,
      image: 오리진스앰플크림,
      likeTF: false,
      tags: {
        BEST: false,
        단독: false,
        오늘드림: true,
        증정: true,
        '1+1': false,
      },
    },
    {
      name : '록시땅 로즈 오 드 뚜왈렛 75ml (2022)',
      originalPrice: 70000,
      discountRate: 10,
      discountPrice: 71100,
      image: 록시땅로즈오드뚜왈렛,
      likeTF: false,
      tags: {
        BEST: false,
        단독: false,
        오늘드림: false,
        증정: false,
        '1+1': false,
      },
    },
    {
      name : '헤라 소프트 피니시 루스 파우더 15g',
      originalPrice: 60000,
      discountRate: 0,
      discountPrice: 60000,
      image: 헤라파우더,
      likeTF: false,
      tags: {
        BEST: false,
        단독: false,
        오늘드림: true,
        증정: false,
        '1+1': false,
      },
    },
    {
      name : '더비다샵 티트리 오일 10ml',
      originalPrice:14000,
      discountRate: 5,
      discountPrice: 13300,
      image: 더바디샵티트리오일,
      likeTF: false,
      tags: {
        BEST: false,
        단독: false,
        오늘드림: true,
        증정: false,
        '1+1': false,
      },
    },
    {
      name : '[박보검 PICK] 비오템옴드 포스수프림 모이스춰라이저 50ml',
      originalPrice: 140000,
      discountRate: 0,
      discountPrice: 140000,
      image: 비오템옴드모이스춰라이저,
      likeTF: false,
      tags: {
        BEST: false,
        단독: false,
        오늘드림: true,
        증정: false,
        '1+1': false,
      },
    },
    {
      name : '비오템옴드 포스수프림 어드밴스드 젤 로션 75ml',
      originalPrice: 90000,
      discountRate: 0,
      discountPrice: 90000,
      image: 비오템옴드젤로션,
      likeTF: false,
      tags: {
        BEST: false,
        단독: false,
        오늘드림: true,
        증정: true,
        '1+1': false,
      },
    },
  ];

  const ProductList = ProductData.map((item) => {
    return <NewPopularProduct key = {item.name} productData = {item} />;
  });

  return (
    <St.NewPopularContainer>
      <St.Header>
        <St.Product className = "new"> 신상품 </St.Product>
        <St.Product className = "popular"> 인기상품 </St.Product>
      </St.Header>
      <St.ProductList>
        {ProductList}
      </St.ProductList>
    </St.NewPopularContainer>
  );
};

export default NewPopularList;

const St = {
  NewPopularContainer : styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  `,

  Header: styled.header`
  display: flex;

  width: 100%;
  height: 3.2rem;
  margin-top: 3.4rem;
  margin-bottom: 1.4rem;

  ${({ theme }) => theme.fonts.SubHead1};
  color: ${({ theme }) => theme.colors.gray_900};

  .new { 
    border-bottom-color: ${({ theme }) => theme.colors.gray_900};
  }
  .popular { 
    color: ${({ theme }) => theme.colors.gray_500};
    border-bottom-color: ${({ theme }) => theme.colors.gray_200};
  }
  `,

  Product: styled.div`
  flex: 1; 
  display: flex;
  justify-content: center;

  border-bottom: 0.2rem solid;
  `,

  ProductList: styled.div`
  display: flex;
  flex-wrap: wrap;
  
  width: 100%;
  justify-content: center;
  gap: 1.1rem; 
  `,
};

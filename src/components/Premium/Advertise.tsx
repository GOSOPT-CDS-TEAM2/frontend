import styled from 'styled-components';

import { 로이비퍼퓸 } from '../../assets/image';
import { ProductData } from '../../types/common';
import Product from '../common/Product';

import { AD_LIST } from './data/AD_LIST';

const Advertise = () => {

  const productData: ProductData[] = [
    {
      name: '로이비 퍼퓸 EDP 50ml 택1 (디스커버리세트, 피오니 앤 화이트 머...',
      originalPrice: 20000,
      discountRate: 38,
      discountPrice: 12400,
      image: 로이비퍼퓸,
      likeTF: false,
      tags: {
        BEST: true,
        단독: false,
        오늘드림: true,
        증정: false,
        '1+1': false,
      },
    },
  ];

  const productList = productData.map((item) => {
    return <Product key={item.name} productData={item} />;
  });

  interface AdProps {
    name: string;
    image: string;
    header: string;
    comment: string;
  }

  const Ad = (props: AdProps) => {
    const { name, image, header, comment } = props;
    return (
      <St.AdImg>
        <img src={image} alt= {name} />
        <St.AdHeader> {header} </St.AdHeader>
        <St.AdContent> {comment} </St.AdContent>
      </St.AdImg>
    );
  };

  return (
    <St.AdvertiseContainer>
      {AD_LIST.map((item, key) => (
        <Ad key = {key} name = {item.name} image = {item.image} header = {item.header} comment = {item.comment}/>
      ))}
      <St.ProductContainer>
        <h1> MD 추천상품</h1>
        {productList}
      </St.ProductContainer>

    </St.AdvertiseContainer>
  );
};

export default Advertise;

const St = {
  AdvertiseContainer: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 100vw;
    margin: 5.3rem 1.5rem 0rem 1.5rem;
  `,

  AdImg: styled.article`
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    width: 34.5rem;
    padding: 1rem;

    &:first-child {
      margin-bottom: 3rem;
    }

    &:nth-child(2) {
      margin-bottom: 2rem;
    }
    
    &:nth-child(3) {
      margin-bottom: 3.8em;
    }
`,

  AdHeader: styled.h1`
    display: flex;
    margin-top: 0.9rem;
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  AdContent: styled.h2`
    display: flex;
    margin-top: 0.1rem;
    
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_700};
  `,

  ProductContainer: styled.section`
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      
      width: 34.5rem;
      margin-left: 1.3rem;
      h1 {
        margin-bottom: 1.5rem;
        ${({ theme }) => theme.fonts.SubHead1};
        color: ${({ theme }) => theme.colors.gray_900};
      }
    `,

};

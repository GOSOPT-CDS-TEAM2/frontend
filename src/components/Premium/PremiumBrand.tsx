import styled from 'styled-components';

import { AllLikeIcon, BrandNameListIcon } from '../../assets/icon';

const PremiumBrand = () => {
  return (
    <St.PremiumBrandContainer>
      <St.Header> 프리미엄 브랜드 </St.Header>
      <St.SortContainer>
        <St.AllLikeButton>
          <img src={AllLikeIcon} alt = "전체/좋아요" />
        </St.AllLikeButton>
        <St.SortButton>
          <img src={BrandNameListIcon} alt = "브랜드 이름 정렬"/>
        </St.SortButton>
      </St.SortContainer>
      
    </St.PremiumBrandContainer>
  );
};

export default PremiumBrand;

const St = {

  PremiumBrandContainer: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;

  `,

  Header: styled.header`
    display: flex;
    justify-content: flex-start;

    width: 9.9rem;
    height: 2.0rem;
    font-family: 'Pretendard';
    font-size : 1.6rem;
    font-weight: 70.0rem;
    letter-spacing: -0.02em;
    line-height: 2.0rem;

    margin: 1.6rem 25.9rem 1.9rem 1.7rem;
  `,

  SortContainer: styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    
  `,

  AllLikeButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7.2rem;
    height: 1.7rem;
    
    background-color: white;
    border: none;
  `,

  SortButton: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 7.2rem;
    height: 1.7rem;
    
    background-color: white;
    border: none;
  `,
};

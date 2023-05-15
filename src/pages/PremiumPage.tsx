import styled from 'styled-components';

import { BackIcon, BagIcon, SearchIcon } from '../assets/icon';

const PremiumPage = () => {
  return (
    <>
      <St.HeaderWrapper>
        <img src={BackIcon} alt="되돌아가기 아이콘" />
        <St.Header> 프리미엄관 </St.Header>
        <img src={SearchIcon} alt="검색 아이콘" />
        <img src={BagIcon} alt="장바구니 아이콘" />
      </St.HeaderWrapper>
      <St.NavWrapper>
        전체 오특 신상 랭킹 기획전 이벤트
      </St.NavWrapper>
    </>
  );
};

export default PremiumPage;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width : 100%;
    height : 46px;
  
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  `,

  Header: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 231px;
    color: black;
  `,

  NavWrapper: styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;
    height: 52px;

    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  `,

};

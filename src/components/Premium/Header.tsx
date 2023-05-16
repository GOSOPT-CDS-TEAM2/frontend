import styled from 'styled-components';

import { BackIcon, BagIcon, SearchIcon } from '../../assets/icon';

const Header = () => {

  return (

    <St.HeaderContainer>
      <St.Button type = "button">
        <img src={BackIcon} alt="되돌아가기 아이콘" />
      </St.Button>
      <St.Header> 프리미엄관 </St.Header>
      <St.Button type = "button">
        <img src={SearchIcon} alt="검색 아이콘" />
      </St.Button>
      <St.Button type = "button">
        <img src={BagIcon} alt="장바구니 아이콘" />
      </St.Button>
    </St.HeaderContainer>

  );
};

export default Header;

const St = {
  HeaderContainer: styled.div`
    display: flex;

    width: 100%;
    height: 4.6rem;
    margin: 0rem;
    
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  `,

  Header: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6.7rem;
    height: 2.2rem;
    margin: 1.2rem 5.8rem 1.2rem 10.6rem;

    ${({ theme }) => theme.fonts.SubHead2};
    ${({ theme }) => theme.colors.gray_900};
    font-size: 1.6rem;
    letter-spacing: -0.04em;
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 2.4rem;
    height: 2.4rem;
    margin: 1.2rem;
    
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
  `,
};

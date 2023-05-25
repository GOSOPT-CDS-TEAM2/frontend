import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { BackIcon, BagIcon, BlackSearchIcon } from '../../assets/icon';

const Header = () => {

  const navigate = useNavigate();

  return (

    <St.HeaderContainer>
      <St.Button type = "button"  onClick={() => navigate('/')}>
        <img src={BackIcon} alt="되돌아가기 아이콘" />
      </St.Button>
      <St.Header> 프리미엄관 </St.Header>
      <St.Button type = "button">
        <img src={BlackSearchIcon} alt="검색 아이콘" />
      </St.Button>
      <St.Button type = "button"   onClick={() => navigate('/cart')}>
        <img src={BagIcon} alt="장바구니 아이콘"/>
      </St.Button>
    </St.HeaderContainer>

  );
};

export default Header;

const St = {
  HeaderContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100vw;
    height: 4.8rem;
    
    box-shadow: 0rem 0.1rem 0rem rgba(0, 0, 0, 0.05);
  `,

  Header: styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 6.7rem;
    height: 2.2rem;
    margin: 1.2rem 5.8rem 1.2rem 10.6rem;

    ${({ theme }) => theme.fonts.SubHead2};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 4.8rem;
    height: 4.8rem;
    padding: 0rem;
    background-color: ${({ theme }) => theme.colors.gray_000};
    border: none;
  `,
};

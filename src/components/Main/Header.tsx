import styled from 'styled-components';

import { AddressIcon, BagIcon, LogoIcon, SearchIcon } from '../../assets/icon';

const Header = () => {
  return (
    <St.HeaderContainer>
      <img src={LogoIcon} alt="올리브영 로고 아이콘" />
      <St.SearchBarContainer>
        <img src={SearchIcon} alt="검색 아이콘" />
        <St.SearchBar type="text" placeholder="힐링버드 노워시 트리트먼트 ..." />
      </St.SearchBarContainer>
      <button type="button">
        <img src={AddressIcon} alt="배달 주소 아이콘" />
      </button>
      <button type="button">
        <img src={BagIcon} alt="장바구니 아이콘" />
      </button>
    </St.HeaderContainer>
  );
};

export default Header;

const St = {
  HeaderContainer: styled.header`
    display: flex;

    width: 37.5rem;
    height: 4.7rem;

    & > button {
      padding: 0;

      border: none;
      background: none;
    }
  `,
  SearchBarContainer: styled.div`
    display: flex;
    align-items: center;

    width: 22.8rem;
    height: 3.3rem;

    padding: 0 1.3rem;
    margin: 1.1rem 0.1rem 0 0.2rem;

    border-radius: 1.7rem;
    border: none;
    background-color: ${({ theme }) => theme.colors.gray_100};
  `,
  SearchBar: styled.input`
    width: 16rem;

    margin-left: 0.2rem;

    background: none;
    border: none;
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_300};

    &:focus {
      outline: none;
    }
  `,
};

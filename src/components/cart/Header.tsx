import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BackIcon, BagIcon, HomeIcon } from '../../assets/icon';

const Header = () => {
  return (
    <St.HeaderContainer>
      <button type="button">
        <img src={BackIcon} alt="뒤로가기 아이콘" width={48} height={48} />
      </button>
      <h2>
        장바구니 <span>(2)</span>
      </h2>
      <Link id="cart" to="/">
        <img src={HomeIcon} alt="장바구니 아이콘" width={48} height={48} />
      </Link>
    </St.HeaderContainer>
  );
};

export default Header;

const St = {
  HeaderContainer: styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100vw;
    height: 4.8rem;

    box-shadow: 0 1rem 0 rgba(0, 0, 0, 0.03);

    & > button,
    img {
      padding: 0;

      border: none;
      background: none;
    }

    & > h2 {
      ${({ theme }) => theme.fonts.SubHead2};
      span {
        color: ${({ theme }) => theme.colors.red_300};
      }
    }
  `,
};

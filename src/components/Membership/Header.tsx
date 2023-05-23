import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { BackIcon, BagIcon } from '../../assets/icon';

const Header = () => {
  const cartCnt = 0;
  return (
    <St.HeaderContainer>
      <button type="button">
        <img src={BackIcon} alt="뒤로가기 아이콘" width={48} height={48} />
      </button>
      <h2>멤버십/쿠폰</h2>
      <Link id="cart" to="/cart">
        <span id="cartCnt">{cartCnt}</span>
        <img src={BagIcon} alt="장바구니 아이콘" width={48} height={48} />
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

    & > button,
    img {
      padding: 0;

      border: none;
      background: none;
    }

    & > h2 {
      ${({ theme }) => theme.fonts.SubHead2};
    }

    #cart {
      position: relative;
    }

    #cartCnt {
      position: absolute;
      left: 55%;
      top: 10%;
      text-align: center;

      width: 1.8rem;
      height: 1.8rem;

      color: ${({ theme }) => theme.colors.gray_000};
      ${({ theme }) => theme.fonts.Body1};

      line-height: 1.8rem;

      border-radius: 50%;

      background: ${({ theme }) => theme.colors.red_500};
    }
  `,
};

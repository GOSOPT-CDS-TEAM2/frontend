import styled from 'styled-components';

import { CategoryIcon, HistoryIcon, HomeIcon, MyIcon, NewMagazineIcon } from '../../assets/icon';

const MenuBar = () => {
  const MenuIconList = [
    { imgSrc: CategoryIcon, imgAlt: '카테고리아이콘' },
    { imgSrc: NewMagazineIcon, imgAlt: '매거진아이콘' },
    { imgSrc: HomeIcon, imgAlt: '홈아이콘' },
    { imgSrc: HistoryIcon, imgAlt: '히스토리아이콘' },
    { imgSrc: MyIcon, imgAlt: '마이페이지아이콘' },
  ].map(({ imgSrc, imgAlt }) => {
    return <img key={imgSrc} src={imgSrc} alt={imgAlt} />;
  });

  return <St.MenuBarContainer>{MenuIconList}</St.MenuBarContainer>;
};

export default MenuBar;

const St = {
  MenuBarContainer: styled.div`
    display: flex;
    justify-content: center;
    gap: 2.9rem;

    position: fixed;
    bottom: 0rem;
    z-index: 2;

    width: 100%;
    height: 8.2rem;

    background-color: ${({ theme }) => theme.colors.gray_000};

    img {
      width: 4.8rem;
      height: 4.8rem;
    }
  `,
};

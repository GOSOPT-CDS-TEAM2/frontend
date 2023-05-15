import { useState } from 'react';
import styled from 'styled-components';

import {
  AwardsIcon,
  DiscountIcon,
  GiftCardIcon,
  GiftIcon,
  MainIcon,
  MembershipIcon,
  PremiumIcon,
  ReveiwIcon,
  WomanCareIcon,
} from '../../assets/icon';
import { AdSpringImg, MainThumbNailImg } from '../../assets/image';

interface Menu {
  url: string;
  description: string;
  link: string;
}

const MainMenu: Menu[] = [
  { url: MainIcon, description: '라이브 버튼 아이콘', link: '/' },
  { url: DiscountIcon, description: '세일 버튼 아이콘', link: '/' },
  { url: PremiumIcon, description: '프리미엄관 버튼 아이콘', link: '/' },
  { url: MembershipIcon, description: '멤버십/쿠폰 버튼 아이콘', link: '/' },
];

const SubMenu: Menu[] = [
  { url: GiftIcon, description: '선물하기 버튼 아이콘', link: '/' },
  { url: AwardsIcon, description: '어워드 버튼 아이콘', link: '/' },
  { url: WomanCareIcon, description: '여성 케어 버튼 아이콘', link: '/' },
  { url: ReveiwIcon, description: '리뷰 버튼 아이콘', link: '/' },
];

const MenuSection = () => {
  const [nowPage, setNowPage] = useState('first');

  const renderMenu = ({ url, description, link }: Menu) => {
    return (
      <a key={description} type="button" href={link}>
        <img src={url} alt={description} />
      </a>
    );
  };
  const MainMenuList = MainMenu.map(renderMenu);

  const SubMenuList = SubMenu.map(renderMenu);

  return (
    <St.MenuSectionContainer>
      <img src={MainThumbNailImg} alt="첫번째 광고 썸네일 이미지" />
      <St.MenuContainer>{MainMenuList}</St.MenuContainer>
      <St.SubMenuContainer>
        <St.MenuContainer className={'sub firstPage'} onScroll={() => console.log('here')}>
          {SubMenuList}
        </St.MenuContainer>
        <St.MenuContainer className={'sub SecondPage'}>
          <img src={GiftCardIcon} alt="기프트카드 버튼 아이콘" />
        </St.MenuContainer>
      </St.SubMenuContainer>
      <St.PageContainer>
        <St.Page className={nowPage === 'first' ? 'nowPage' : ''} />
        <St.Page className={nowPage === 'second' ? 'nowPage' : ''} />
      </St.PageContainer>
      <img src={AdSpringImg} alt="봄맞이 할인 광고 배너" />
    </St.MenuSectionContainer>
  );
};

export default MenuSection;

const St = {
  MenuSectionContainer: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    & > img {
      width: 100%;
    }
  `,
  MenuContainer: styled.section`
    display: flex;
    gap: 0.8rem;

    width: 34.4rem;

    & > a {
      & > img {
        width: 8rem;
      }
    }

    &.sub {
    }
  `,
  SubMenuContainer: styled.div`
    display: flex;

    width: 100vw;
    height: 5.7rem;

    margin-top: 0.9rem;

    overflow-y: hidden;
    overflow-x: hidden;
  `,
  PageContainer: styled.div`
    display: flex;
    gap: 0.8rem;
  `,
  Page: styled.div`
    width: 0.6rem;
    height: 0.6rem;

    margin: 1.6rem 0 1.5rem;

    border-radius: 0.3rem;

    background-color: ${({ theme }) => theme.colors.gray_200};
    &.nowPage {
      background-color: ${({ theme }) => theme.colors.gray_700};
    }
  `,
};

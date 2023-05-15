import { useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

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

// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';

// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
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
        <img src={url} alt={description} width={80} />
      </a>
    );
  };
  const MainMenuList = MainMenu.map(renderMenu);

  const SubMenuList = SubMenu.map(renderMenu);

  return (
    <St.MenuSectionContainer>
      <St.MenuContainer>{MainMenuList}</St.MenuContainer>

      <Swiper
        pagination={{ clickable: true }} // 우측의 점을 클릭했을 때, 클릭한 슬라이드로 이동하게 됩니다.
        speed={700} // 슬라이드가 넘어가는 속도를 조정. 700ms
      >
        <SwiperSlide>
          <St.MenuContainer className={'sub firstPage'} onScroll={() => console.log('here')}>
            {SubMenuList}
          </St.MenuContainer>
        </SwiperSlide>
        <SwiperSlide>
          <St.MenuContainer className={'sub SecondPage'}>
            <img src={GiftCardIcon} alt="기프트카드 버튼 아이콘" />
          </St.MenuContainer>
        </SwiperSlide>
      </Swiper>

      <St.PageContainer>
        <St.Page className={nowPage === 'first' ? 'nowPage' : ''} />
        <St.Page className={nowPage === 'second' ? 'nowPage' : ''} />
      </St.PageContainer>
    </St.MenuSectionContainer>
  );
};

export default MenuSection;

const St = {
  MenuSectionContainer: styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .swiper > .swiper-wrapper {
      display: flex;
      width: 100vw;
      height: 5.7rem;

      margin-top: 0.9rem;
    }
  `,

  MenuContainer: styled.section`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 8rem);
    column-gap: 0.8rem;

    width: 100vw;
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

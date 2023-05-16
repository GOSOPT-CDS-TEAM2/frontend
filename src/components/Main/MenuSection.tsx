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
  SwiperCore.use([Pagination]);

  const renderMenu = ({ url, description, link }: Menu) => {
    return (
      <a key={description} href={link}>
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
        pagination={{ clickable: true }} // 페이지네이션 옵션
        speed={700} // 슬라이드가 넘어가는 속도를 조정. 700ms
      >
        <SwiperSlide>
          <St.MenuContainer className={'sub'}>{SubMenuList}</St.MenuContainer>
        </SwiperSlide>

        <SwiperSlide>
          <St.MenuContainer className={'sub'}>
            <a href={'/'}>
              <img src={GiftCardIcon} alt="기프트카드 버튼 아이콘" />
            </a>
          </St.MenuContainer>
        </SwiperSlide>
      </Swiper>
    </St.MenuSectionContainer>
  );
};

export default MenuSection;

const St = {
  MenuSectionContainer: styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 1.7rem;

    & > .swiper {
      display: flex;
      justify-content: center;

      margin-bottom: 3.7rem;

      & .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;

        margin: 8.2rem 0.4rem 0;

        background-color: ${({ theme }) => theme.colors.gray_200};
      }
      & .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.gray_700};
      }
      & > .swiper-wrapper {
        display: flex;

        width: 100vw;
        height: 5.7rem;

        margin-top: 0.9rem;
      }
    }
  `,

  MenuContainer: styled.section`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 8rem);
    column-gap: 0.8rem;

    width: 100vw;
  `,
};

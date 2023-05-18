import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { MemberShipEvent1, MemberShipEvent2, MemberShipEvent3 } from '../../assets/image';

interface Event {
  imgUrl: string;
  link: string;
  description: string;
}

const EVENT_LIST: Event[] = [
  { imgUrl: MemberShipEvent1, link: '/#', description: '첫 구매 100원부터' },
  { imgUrl: MemberShipEvent2, link: '/#', description: '슈퍼브랜드위크 선착순 특가 990원' },
  { imgUrl: MemberShipEvent3, link: '/#', description: '5월에도 올리브영을 선물해' },
];

const EventSection = () => {
  SwiperCore.use([Pagination]);
  return (
    <St.EventSectionContainer>
      <h1>멤버십 이벤트</h1>
      <Swiper
        pagination={{ clickable: true }} // 페이지네이션 옵션
        speed={700} // 슬라이드가 넘어가는 속도를 조정. 700ms
      >
        {EVENT_LIST.map((item, idx) => (
          <SwiperSlide key={idx}>
            <St.EventContainer>
              <Link to={item.link}>
                <img src={item.imgUrl} alt={item.description} width={346} height={185}></img>
              </Link>
            </St.EventContainer>
          </SwiperSlide>
        ))}
      </Swiper>
      <button type="button">혜택 알람 받기</button>
    </St.EventSectionContainer>
  );
};

export default EventSection;

const St = {
  EventSectionContainer: styled.div`
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.fonts.Head4}
    color:${({ theme }) => theme.colors.gray_900};

    & > h1 {
      padding: 0 1.4rem;
      margin-top: 6.3rem;
    }

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 4.1rem;
      margin: 2.8rem 1.7rem 4.5rem;

      ${({ theme }) => theme.fonts.Title2}
      color:${({ theme }) => theme.colors.gray_700};
      background: ${({ theme }) => theme.colors.gray_000};
      border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
      border-radius: 0.4rem;

      cursor: pointer;
    }

    & > .swiper {
      display: flex;
      justify-content: center;

      margin-top: 1.6rem;

      & .swiper-pagination-bullet {
        width: 0.6rem;
        height: 0.6rem;

        margin: 21.7rem 0.4rem 0;

        background-color: ${({ theme }) => theme.colors.gray_300};
      }
      & .swiper-pagination-bullet-active {
        background-color: ${({ theme }) => theme.colors.gray_700};
      }
      & > .swiper-wrapper {
        display: flex;

        width: 100%;
        height: 21.6rem;
      }
    }
  `,
  EventContainer: styled.section`
    display: flex;
    justify-content: center;

    width: 100%;
  `,
};

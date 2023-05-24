import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  믿고보는구매후기Img,
  봄맞이특가Img,
  비원츠베스트셀러2종Img,
  올라이브기프트카드Img,
  올리브영데이Img,
  트러블케어Img,
} from '../../assets/image';

const WeeklySpecial = () => {
  const AD_DATA = [
    { imgUrl: 믿고보는구매후기Img, description: '믿고 보는 구매 후기 광고' },
    { imgUrl: 봄맞이특가Img, description: '봄맞이 특가 광고' },
    { imgUrl: 트러블케어Img, description: '트러블케어 광고' },
    { imgUrl: 비원츠베스트셀러2종Img, description: '비원츠 베스트 셀러 2종 광고' },
    { imgUrl: 올리브영데이Img, description: '올리브영데이 광고' },
    { imgUrl: 올라이브기프트카드Img, description: '올라이브기프트카드 광고' },
  ];

  const adList = AD_DATA.map(({ imgUrl, description }) => {
    return (
      <SwiperSlide key={imgUrl}>
        <St.AdImg src={imgUrl} alt={description} />
      </SwiperSlide>
    );
  });

  return (
    <St.WeeklySpecial>
      <St.Title>Weekly Special</St.Title>
      <St.AdContainer>
        <Swiper>{adList}</Swiper>
      </St.AdContainer>
    </St.WeeklySpecial>
  );
};

export default WeeklySpecial;

const St = {
  WeeklySpecial: styled.section`
    margin-top: 3.9rem;
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  AdImg: styled.img`
    width: 12.1rem;
    height: 12.1rem;
  `,
  AdContainer: styled.div`
    display: flex;
    justify-content: center;

    & > .swiper {
      display: flex;
      justify-content: center;

      width: 13.7rem;
      margin-top: 1.9rem;

      & > .swiper-wrapper {
        display: flex;
        gap: 1.6rem;
        width: 12.1rem;

        & > .swiper-slide {
          opacity: 0.4;
          width: 12.1rem !important;
        }
        & > .swiper-slide-active {
          opacity: 1;
        }
      }
    }
  `,
};

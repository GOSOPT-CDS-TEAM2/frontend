import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { 바비브라운, 숨, 헤라 } from '../../assets/image';

const BrandIntroduction = () => {
  SwiperCore.use([Mousewheel, Pagination, Scrollbar]);
  return (

    <St.BrandIntroContainer>
        
      <St.AdImg4>
        <img src={바비브라운} alt="베스트 향 광고"/>
        <St.AdHeader> 에스티로더그룹</St.AdHeader>
        <St.AdContent> 최대 1+1 대전 </St.AdContent>
      </St.AdImg4>

      <St.SwiperHeader> Brand Introduction </St.SwiperHeader>

      <St.CustomSwiper
        modules = {[Pagination, Navigation, Mousewheel, Scrollbar]}
        slidesPerView = "auto"
        
        spaceBetween = {14.3}
        mousewheel = {true}
        pagination = {{ 
          el: ".pagination_progress",
          type: "progressbar",
        }}
      >
        <SwiperSlide> 
          <img src={숨} alt = "숨 브랜드 소개" /> 
          <St.SwiperComment>
            오랜 연구와 진보된 발효과학, 숨37
          </St.SwiperComment>
        </SwiperSlide>
        <SwiperSlide> 
          <img src={헤라} alt = "헤라 브랜드 소개" /> 
          <St.SwiperComment>
            CONTEMPORARY 시그니처 
          </St.SwiperComment>
        </SwiperSlide>
        <div className="pagination_progress"></div>
      </St.CustomSwiper>
    </St.BrandIntroContainer>

  );
};

export default BrandIntroduction;

const St = {

  BrandIntroContainer: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100vw;

        margin-top: 3.8rem;

        overflow: hidden;
        padding-bottom: 20rem;


    `,

  CustomSwiper : styled(Swiper)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    

    & > .swiper-wrapper {
        display: flex;
        width: 100vw;
        height: 15.8rem;
        margin-left: 1.6rem;
        
        
    }

    & .swiper-slide {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        width: 20.8rem;
        height: 13.5rem;
        border-radius: 4px;
        > img {
            width : 20.8rem;
            height: 13.5rem;
        }
    }

    .pagination_progress {
      width: 34.6rem;
      height: 0.2rem;
      margin-left: 1.4rem;
      background-color: ${({ theme }) => theme.colors.gray_100};
      position: relative;
      margin-top: 2.5rem;
    }
    
    .pagination_progress::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color:  ${({ theme }) => theme.colors.gray_900};
      transition: width 0.3s ease;
    }
    
    .swiper-slide-active .pagination_progress::after {
      width: 100%;
      color:  ${({ theme }) => theme.colors.gray_900};
    }
    .swiper-pagination-progressbar-fill {
      background: ${({ theme }) => theme.colors.gray_900} !important;
    }
  `,

  SwiperHeader: styled.h2`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 34.5rem;
    margin-left: 1.4rem;
    margin-bottom: 1.6rem;
    ${({ theme }) => theme.fonts.SubHead1};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  SwiperComment: styled.h3`
    display: flex;
    margin-top: 0.8rem;
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
    
  AdImg4: styled.div`
    display: flex;
    width: 34.5rem;
    height: 24rem;
    flex-direction: column;
    justify-content: center;
    margin: 0rem 1.5rem 4.0rem 1.5rem;

    img {
      border-radius: 0.4rem;
    }
  `,

  AdHeader: styled.h1`
    display: flex;
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
`,

  AdContent: styled.h3`
    display: flex;
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_500};
`,

};

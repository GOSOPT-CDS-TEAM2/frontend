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
      
      <CustomSwiper
        modules = {[Pagination, Navigation, Mousewheel, Scrollbar]}
        slidesPerView = "auto"
        spaceBetween = {18}
        mousewheel = {true}
        pagination = {{ 
          el: ".pagination_progress",
          type: "progressbar",
        }}
      >
        
        <SwiperSlide> <img src={숨} alt = "숨 브랜드 소개" /> </SwiperSlide>
        <SwiperSlide> <img src={헤라} alt = "헤라 브랜드 소개" /> </SwiperSlide>
        <div className="pagination_progress"></div>
      </CustomSwiper>
    </St.BrandIntroContainer>

  );
};

export default BrandIntroduction;

const CustomSwiper = styled(Swiper)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    

    & > .swiper-wrapper {
        display: flex;
        width: 100vw;
        height: 20rem;
        margin-left: 1.6rem;
        
    }

    & .swiper-slide {
        width: 20.8rem;
        height: 13.5rem;
        border-radius: 4px;
        > img {
            width : 20.8rem;
            height: 13.5rem;
        }
    }

    .pagination_progress {
      width: 100%;
      height: 10px;
      background-color: #f1f1f1;
      position: relative;
      margin-top: 10px;
    }
    
    .pagination_progress::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background-color: #007aff;
      transition: width 0.3s ease;
    }
    
    .swiper-slide-active .pagination_progress::after {
      width: 100%;
    }
    
`;

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
    
  AdImg4: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0rem 1.5rem 4.0rem 1.5rem;
        width: 34.5rem;
        height: 24rem;
  `,

  AdHeader: styled.h1`
    display: flex;
    margin-top: 0.9rem;
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
`,

  AdContent: styled.h3`
    display: flex;
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_700};
`,

};

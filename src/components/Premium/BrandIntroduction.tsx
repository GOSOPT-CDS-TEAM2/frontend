import { useRef, useState } from 'react';
import styled from 'styled-components';
import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { 바비브라운Img, 바비브라운영상, 숨Img, 헤라Img } from '../../assets/image';

const BrandIntroduction = () => {

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  SwiperCore.use([Mousewheel, Pagination]);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!isVideoPlaying);
    }
  };
  
  return (

    <St.BrandIntroContainer>
        
      <St.AdVideo>
        <video 
          ref = {videoRef} 
          muted 
          loop 
          onClick = {handleVideoClick}>
          <source src = {바비브라운영상} type = "video/mp4"/>
        </video>
        <St.AdHeader> 에스티로더그룹</St.AdHeader>
        <St.AdContent> 최대 1+1 대전 </St.AdContent>
      </St.AdVideo>

      <St.SwiperHeader> Brand Introduction </St.SwiperHeader>

      <St.CustomSwiper
        modules = {[Pagination, Navigation, Mousewheel]}
        slidesPerView = "auto"
        spaceBetween = {14.3}
        mousewheel = {true}
        
        threshold = {0}
        pagination = {{ 
          el: ".pagination_progress",
          type: "progressbar",
        }}
      >
        <SwiperSlide> 
          <img src={숨Img} alt = "숨 브랜드 소개" /> 
          <St.SwiperComment>
            오랜 연구와 진보된 발효과학, 숨37
          </St.SwiperComment>
        </SwiperSlide>
        <SwiperSlide> 
          <img src={헤라Img} alt = "헤라 브랜드 소개" /> 
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
        padding-bottom: 20rem;

        overflow: hidden;
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
        
        border-radius: 0.4rem;
        > img {
            width : 20.8rem;
            height: 13.5rem;
        }
    }

    .pagination_progress {
      position: relative;

      width: 34.6rem;
      height: 0.2rem;
      margin-top: 2.5rem;
      margin-left: 1.4rem;

      background-color: ${({ theme }) => theme.colors.gray_100};
    }
    
    .pagination_progress::after {
      position: absolute;
      content: "";
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
    
  AdVideo: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    width: 34.5rem;
    margin: 0rem 1.5rem 4.0rem 1.5rem;

    video {
      border-radius: 0.4rem;
    }
  `,

  AdHeader: styled.h1`
    display: flex;
    margin-top: 1rem;
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
`,

  AdContent: styled.h2`
    display: flex;
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_500};
`,

};

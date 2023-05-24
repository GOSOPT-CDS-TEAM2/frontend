import { useEffect } from 'react';
import styled from 'styled-components';

import { AdHandCareImg, AdSpringImg, MainThumbNailImg } from '../assets/image';
import CategoryNav from '../components/Main/CategoryNav';
import CategoryRank from '../components/Main/CategoryRank';
import Header from '../components/Main/Header';
import HealthyLife from '../components/Main/HealthyLife';
import HotEvent from '../components/Main/HotEvent';
import MenuSection from '../components/Main/MenuSection';
import Recommend from '../components/Main/Recommend';
import SpecialPrice from '../components/Main/SpecialPrice';
import WeeklySpecial from '../components/Main/WeeklySpecial';
import WeightManagement from '../components/Main/WeightManagement';
import { getRecommendData } from '../utils/lib/main';

const Main = () => {
  useEffect(() => {
    const data = getRecommendData();
    console.log(data);
  }, []);

  return (
    <St.MainContainer>
      <Header />
      <CategoryNav />
      <main>
        <img src={MainThumbNailImg} alt="첫번째 광고 썸네일 이미지" />
        <MenuSection />
        <img src={AdSpringImg} alt="봄맞이 할인 광고 배너" />
        <Recommend />
        <CategoryRank />
        <img src={AdHandCareImg} alt="핸드케어 광고 배너" />
        <HealthyLife />
        <SpecialPrice />
        <WeeklySpecial />
        <HotEvent />
        <WeightManagement />
      </main>
    </St.MainContainer>
  );
};

export default Main;
const St = {
  MainContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;

    & > main {
      display: flex;
      flex-direction: column;
      & > img {
        width: 100vw;
      }
    }
  `,
};

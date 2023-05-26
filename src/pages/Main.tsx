import styled from 'styled-components';

import { AdHandCareImg, AdSpringImg, MainThumbNailImg } from '../assets/image';
import Footer from '../components/common/Footer';
import MenuBar from '../components/common/MenuBar';
import CategoryNav from '../components/main/CategoryNav';
import CategoryRank from '../components/main/CategoryRank';
import Header from '../components/main/Header';
import HealthyLife from '../components/main/HealthyLife';
import HotEvent from '../components/main/HotEvent';
import MenuSection from '../components/main/MenuSection';
import Recommend from '../components/main/Recommend';
import SpecialPrice from '../components/main/SpecialPrice';
import WeeklySpecial from '../components/main/WeeklySpecial';
import WeightManagement from '../components/main/WeightManagement';

const Main = () => {
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
        <WeeklySpecial />
        <HotEvent />
        <WeightManagement />
        <HealthyLife />
        <SpecialPrice />
      </main>
      <Footer />
      <MenuBar />
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

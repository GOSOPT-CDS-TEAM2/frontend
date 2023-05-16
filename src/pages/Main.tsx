import styled from 'styled-components';

import { AdSpringImg, MainThumbNailImg } from '../assets/image';
import CategoryNav from '../components/Main/CategoryNav';
import Header from '../components/Main/Header';
import MenuSection from '../components/Main/MenuSection';

const Main = () => {
  return (
    <St.MainContainer>
      <Header />
      <CategoryNav />
      <main>
        <img src={MainThumbNailImg} alt="첫번째 광고 썸네일 이미지" />
        <MenuSection />
        <img src={AdSpringImg} alt="봄맞이 할인 광고 배너" />
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

    width: 100vw;

    overflow-x: hidden;

    & > main > img {
      width: 100%;
    }
  `,
};

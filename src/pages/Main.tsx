import styled from 'styled-components';

import CategoryNav from '../components/Main/CategoryNav';
import Header from '../components/Main/Header';
import MenuSection from '../components/Main/MenuSection';

const Main = () => {
  return (
    <St.MainContainer>
      <Header />
      <CategoryNav />
      <MenuSection />
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
  `,
};

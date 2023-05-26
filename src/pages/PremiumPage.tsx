import styled from 'styled-components';

import Footer from '../components/common/Footer';
import MenuBar from '../components/common/MenuBar';
import Advertise from '../components/premium/Advertise';
import BrandIntroduction from '../components/premium/BrandIntroduction';
import Header from '../components/premium/Header';
import Menu from '../components/premium/Menu';
import NewPopularList from '../components/premium/NewPopularList';
import PremiumBrand from '../components/premium/PremiumBrand';

const PremiumPage = () => {
  return (
    <St.PremiumContainer>
      <Header />
      <Menu />
      <PremiumBrand />
      <Advertise />
      <BrandIntroduction />
      <NewPopularList />
      <Footer />
      <MenuBar />
    </St.PremiumContainer>
  );
};

export default PremiumPage;

const St = {
  PremiumContainer: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100vw;
    overflow-x: hidden;
    z-index: 1;
  `,
};

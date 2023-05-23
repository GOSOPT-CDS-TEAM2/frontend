import styled from 'styled-components';

import Advertise from '../components/Premium/Advertise';
import BrandIntroduction from '../components/Premium/BrandIntroduction';
import Header from '../components/Premium/Header';
import Menu from '../components/Premium/Menu';
import PremiumBrand from '../components/Premium/PremiumBrand';

const PremiumPage = () => {
  
  return (
    <St.PremiumContainer>
      <Header />
      <Menu />
      <PremiumBrand />
      <Advertise />
      <BrandIntroduction />
    </St.PremiumContainer>
  );
};

export default PremiumPage;

const St = {
  PremiumContainer: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    
    width : 100vw;
    overflow-x: hidden;
  `,

};

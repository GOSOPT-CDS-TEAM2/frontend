import styled from 'styled-components';

import Header from '../components/Premium/Header';
import Menu from '../components/Premium/Menu';
import NewPopularList from '../components/Premium/NewPopularList';
import PremiumBrand from '../components/Premium/PremiumBrand';

const PremiumPage = () => {
  return (
    <St.PremiumContainer>
      <Header />
      <Menu />
      <PremiumBrand />
      <NewPopularList/>
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

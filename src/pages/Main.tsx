import styled from 'styled-components';

import Header from '../components/Main/Header';

const Main = () => {
  return (
    <St.MainContainer>
      <Header />
    </St.MainContainer>
  );
};

export default Main;
const St = {
  MainContainer: styled.div`
    width: 100vw;
  `,
};

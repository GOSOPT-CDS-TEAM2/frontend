import styled from 'styled-components';

import { LogoIcon } from '../assets/icon';
import Product from '../components/common/Product';

const Home = () => {
  return (
    <div>
      <St.Header>Vite + React</St.Header>
      <img src={LogoIcon} alt="로고" />
      <Product />
    </div>
  );
};

export default Home;
const St = {
  Header: styled.h1`
    font-size: 10rem;
    color: red;
  `,
};

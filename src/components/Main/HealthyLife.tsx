import styled from 'styled-components';

import { 깨가솟아지는방앗간Img, 심드렁쿠키바Img } from '../../assets/image';

const HealthyLife = () => {
  return (
    <St.HealthyLifeContainer>
      <St.Title>Healthy Life</St.Title>
      <St.ProductContainer>
        <div />
        <img src={심드렁쿠키바Img} alt="깨가 솟아지는 방앗간" />
        <img src={깨가솟아지는방앗간Img} alt="깨가 솟아지는 방앗간" />
        <div />
      </St.ProductContainer>
    </St.HealthyLifeContainer>
  );
};

export default HealthyLife;

const St = {
  HealthyLifeContainer: styled.section`
    margin-top: 1.3rem;
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  ProductContainer: styled.div`
    display: flex;
    gap: 1.2rem;

    width: 100vw;

    margin-top: 1.6rem;

    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }

    & > div {
      width: 1.4rem;
      height: 2.6rem;
    }
  `,
};

import styled from 'styled-components';

import { 베스트향광고, 에스티로더작은광고, 에스티로더큰광고 } from '../../assets/image';

const Advertise = () => {
  return (
    <St.AdvertiseContainer>
      <St.AdImg1>
        <img src={에스티로더큰광고} alt="에스티로더 큰 광고" />
        <St.AdHeader> 단 7일, 에스티 로더 그룹 </St.AdHeader>
        <St.AdContent> 최대 1+1 & 정품 증정 </St.AdContent>
      </St.AdImg1>
      <St.AdImg2>
        <img src={에스티로더작은광고} alt="에스티로더 작은 광고" />
        <St.AdHeader> 단 7일 최대 1+1 </St.AdHeader>
        <St.AdContent> &정품 증정까지! </St.AdContent>
      </St.AdImg2>
      <St.AdImg3>
        <img src={베스트향광고} alt="베스트 향 광고" />
        <St.AdHeader> BEST 향 </St.AdHeader>
        <St.AdContent> 최대 20% 할인! </St.AdContent>
      </St.AdImg3>
    </St.AdvertiseContainer>
  );
};

export default Advertise;

const St = {
  AdvertiseContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6.3rem 1.5rem 0rem 1.5rem;
    width: 100vw;
  `,

  AdImg1: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.7rem;
  padding: 1rem;

  width: 34.5rem;
  height: 32.3rem;
`,

  AdImg2: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.3rem;

  padding: 1rem;
  width: 34.5rem;
  height: 19rem;
  `,

  AdImg3: styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 3.8rem;

  padding: 1rem;
  width: 34.5rem;
  height: 19rem;
  `,

  AdHeader: styled.h1`
    display: flex;
    margin-top: 0.9rem;
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,

  AdContent: styled.h3`
    display: flex;
    margin-top: 0.1rem;
    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_700};
  `,
};

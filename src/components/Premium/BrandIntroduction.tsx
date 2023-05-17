import styled from 'styled-components';

import { 바비브라운, 숨, 헤라 } from '../../assets/image';

const BrandIntroduction = () => {

  return (

    <St.BrandIntroContainer>
      
      <St.AdImg4>
        <img src={바비브라운} alt="베스트 향 광고"/>
        <St.AdHeader> 에스티로더그룹</St.AdHeader>
        <St.AdContent> 최대 1+1 대전 </St.AdContent>
      </St.AdImg4>

    </St.BrandIntroContainer>

  );
};

export default BrandIntroduction;

const St = {

  BrandIntroContainer: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;

        margin-top: 3.8rem;
    `,
    
  AdImg4: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0rem 1.5rem 4.0rem 1.5rem;
        width: 34.5rem;
        height: 24rem;
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

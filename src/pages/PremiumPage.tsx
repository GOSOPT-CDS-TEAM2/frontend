import styled from 'styled-components';

const PremiumPage = () => {
  return (
    <St.HeaderWrapper>
      <St.Header> 프리미엄관 </St.Header>
    </St.HeaderWrapper>
  );
};

export default PremiumPage;

const St = {
  HeaderWrapper: styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width : 375px;
    height : 46px;
  
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
  `,

  Header: styled.header`
    color: black;
  `,

};

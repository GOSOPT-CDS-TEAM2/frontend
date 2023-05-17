import styled from 'styled-components';

const CustomerGradeInfo = () => {
  return <St.CustomerGradeInfoContainer>CustomerGradeInfo</St.CustomerGradeInfoContainer>;
};

export default CustomerGradeInfo;

const St = {
  CustomerGradeInfoContainer: styled.div`
    width: 100%;

    background: ${({ theme }) => theme.colors.pink_500};
  `,
};

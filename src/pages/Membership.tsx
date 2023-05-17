import styled from 'styled-components';

import Header from '../components/Membership/Header';

const Membership = () => {
  return (
    <St.MembershipContainer>
      <Header />
    </St.MembershipContainer>
  );
};

export default Membership;

const St = {
  MembershipContainer: styled.div``,
};

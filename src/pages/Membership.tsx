import styled from 'styled-components';

import CategoryNav from '../components/Membership/CategoryNav';
import CustomerGradeInfo from '../components/Membership/CustomerGradeInfo';
import Header from '../components/Membership/Header';

const Membership = () => {
  return (
    <St.MembershipContainer>
      <Header />
      <CategoryNav />
      <CustomerGradeInfo />
<<<<<<< HEAD
    </St.MembershipContainer>
  );
};

export default Membership;

const St = {
  MembershipContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;

    overflow-x: hidden;
    /* & > main > img {
      width: 100%;
    } */
  `,
};

const Membership = () => {
  return (
    <St.MembershipContainer>
      <Header />
=======
>>>>>>> c482c7d (feat/#4: 카테고리 nav 구현)
    </St.MembershipContainer>
  );
};

export default Membership;

const St = {
  MembershipContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;

    overflow-x: hidden;
    /* & > main > img {
      width: 100%;
    } */
  `,
};
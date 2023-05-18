import styled from 'styled-components';

import CategoryNav from '../components/Membership/CategoryNav';
import ClauseSection from '../components/Membership/ClauseSection';
import CouponSection from '../components/Membership/CouponSection';
import CustomerGradeInfo from '../components/Membership/CustomerGradeInfo';
import EventSection from '../components/Membership/EventSection';
import Header from '../components/Membership/Header';

const Membership = () => {
  return (
    <St.MembershipContainer>
      <Header />
      <CategoryNav />
      <CustomerGradeInfo />
      <CouponSection />
      <EventSection />
      <ClauseSection />
    </St.MembershipContainer>
  );
};

export default Membership;

const St = {
  MembershipContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;

    overflow-x: hidden;
  `,
};

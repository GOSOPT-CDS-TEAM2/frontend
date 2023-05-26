import styled from 'styled-components';

import Footer from '../components/common/Footer';
import MenuBar from '../components/common/MenuBar';
import CategoryNav from '../components/membership/CategoryNav';
import ClauseSection from '../components/membership/ClauseSection';
import CouponSection from '../components/membership/CouponSection';
import CustomerGradeInfo from '../components/membership/CustomerGradeInfo';
import EventSection from '../components/membership/EventSection';
import Header from '../components/membership/Header';

const Membership = () => {
  return (
    <St.MembershipContainer>
      <Header />
      <CategoryNav />
      <CustomerGradeInfo />
      <CouponSection />
      <EventSection />
      <ClauseSection />
      <Footer />
      <MenuBar />
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

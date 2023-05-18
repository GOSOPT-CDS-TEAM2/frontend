import styled from 'styled-components';

import CategoryNav from '../components/Membership/CategoryNav';
import CouponList from '../components/Membership/Coupon';
import CustomerGradeInfo from '../components/Membership/CustomerGradeInfo';
import Header from '../components/Membership/Header';

const Membership = () => {
  return (
    <St.MembershipContainer>
      <Header />
      <CategoryNav />
      <CustomerGradeInfo />
      <CouponList />
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

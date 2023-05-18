import styled from 'styled-components';

import { DownIcon, InfoIcon } from '../../assets/icon';
import { CouponGrayImg, CouponPinkImg } from '../../assets/image';

import { COUPON_LIST } from './data/COUPON_LIST';

interface CouponProps {
  name: string;
  grade: string;
  type: string;
  condition: string;
}

const Coupon = ({ name, grade, type, condition }: CouponProps) => {
  return (
    <St.CouponContainer type={type}>
      <div className="content">
        <h2>
          [{grade}] {type} {name} 쿠폰
        </h2>
        <h1>{name}</h1>
        <small>{condition}</small>
      </div>
      <div className="download">
        <h2>{type === '오늘드림' && type}</h2>
        <img src={DownIcon} alt="다운로드 아이콘"></img>
      </div>
    </St.CouponContainer>
  );
};

const CouponList = () => {
  return (
    <St.CouponListContainer>
      <h1>
        지금 받을 수 있는 쿠폰<img src={InfoIcon} alt="인포메이션 아이콘"></img>
      </h1>
      {COUPON_LIST.map((item, key) => (
        <Coupon key={key} name={item.name} grade={item.grade} type={item.type} condition={item.condition} />
      ))}
    </St.CouponListContainer>
  );
};

export default CouponList;

const St = {
  CouponContainer: styled.div<{ type: string }>`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 34.6rem;
    height: 12.6rem;

    margin-top: 1.5rem;

    &::before {
      content: '';

      position: absolute;
      z-index: -1;

      width: 35.6rem;
      height: 13rem;

      background-image: url(${({ type }) => (type === '오늘드림' ? CouponPinkImg : CouponGrayImg)});
    }

    .content {
      margin-left: 2.1rem;

      & > h2 {
        ${({ theme }) => theme.fonts.SubTitle4}
        color:${({ theme }) => theme.colors.gray_700};
      }

      & > h1 {
        margin: 0.9rem 0;

        ${({ theme }) => theme.fonts.Head1}
        color:${({ theme }) => theme.colors.gray_900};
      }

      & > small {
        ${({ theme }) => theme.fonts.SubTitle4}
        color:${({ theme }) => theme.colors.gray_300};
      }
    }

    .download {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      height: 100%;
      width: 4.8rem;
      padding: 1.9rem 0;

      & > h2 {
        width: 2.2rem;

        ${({ theme }) => theme.fonts.SubTitle3}
        color:${({ theme }) => theme.colors.pink_500};
      }
    }
  `,
  CouponListContainer: styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 5.4rem;
    margin-bottom: 1.4rem;
    padding: 0 1.4rem; // TODO: 소수점 수정 필요

    ${({ theme }) => theme.fonts.Head4}
    color:${({ theme }) => theme.colors.gray_900};

    & > h1 {
      display: flex;
      align-items: center;

      & > img {
        margin-left: 0.3rem;
      }
    }
  `,
};

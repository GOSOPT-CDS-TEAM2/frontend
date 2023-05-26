import { GradeBarImg, MemberShipSpeechBubbleImg } from '../../assets/image';

import { GRADE_LIST } from './data/GRADE_LIST';
import GradeBenefitModal from './GradeBenefitModal';
import ModalPortal from './ModalPortal';
import styled from 'styled-components';
import { useState } from 'react';

const CustomerGradeInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const customerInfo = {
    name: '황현진',
    paymentAmount: 178200, //6개월간 지불한 금액
    remainDate: 64, // 등급 유지까지 남은 기간
    upgradePeriod: '2023년 하반기', // 등급 전환 시기
  };

  // 구매한 금액에 따른 등급, 등급 전환까지 남은 금액, 전환될 등급을 가져오는 함수
  const getCustomerGrade = (paymentAmount: number) => {
    let grade = '';
    let remainAmount = 0;
    let nextGrade: string | undefined = '';

    GRADE_LIST.forEach((range) => {
      if (range.min <= paymentAmount && paymentAmount < range.max) {
        grade = range.grade;
        remainAmount = range.max - paymentAmount;
        nextGrade = range.nextGrade;
      }
    });
    return { grade, remainAmount, nextGrade };
  };

  const { grade, remainAmount, nextGrade } = getCustomerGrade(customerInfo.paymentAmount);

  const gradeList = GRADE_LIST.map((item, idx) => {
    return (
      <li key={idx} className={item.grade === nextGrade ? 'selected' : ''}>
        {item.grade}
      </li>
    );
  });

  return (
    <>
      {modalOpen && (
        <ModalPortal>
          <GradeBenefitModal curGrade={grade} onClose={() => setModalOpen(false)} />
        </ModalPortal>
      )}
      <St.CustomerGradeInfoContainer>
        <St.InfoDescriptionContainer>
          <div className="customerGradeInfo">
            <div className="description">
              <h1>
                {customerInfo.name}님의 등급
                <br /> {grade} OLIVE
              </h1>
              <p>
                현재 등급 유지까지 <strong>{customerInfo.remainDate}</strong> 일 남았어요!
              </p>
            </div>
            <span className="point">P</span>
          </div>
          <St.GradeFigureContainer>
            <aside>
              <img src={MemberShipSpeechBubbleImg} alt="회원 등급까지 남은 금액을 설명하는 말풍선" />
              <p>
                <span className="remainAmount">{remainAmount.toLocaleString()}원 </span>추가 구매 시<br />
                {customerInfo.upgradePeriod} <span className="nextGrade">{nextGrade} OLIVE</span>
              </p>
            </aside>
            <div>
              <img src={GradeBarImg} alt="등급 위치를 알려주는 바"></img>
              <ol>{gradeList}</ol>
            </div>
          </St.GradeFigureContainer>
        </St.InfoDescriptionContainer>
        <button
          type="button"
          onClick={() => {
            setModalOpen(true);
          }}>
          <span className="point">P</span>등급별 혜택 보기
        </button>
      </St.CustomerGradeInfoContainer>
    </>
  );
};

export default CustomerGradeInfo;

const St = {
  CustomerGradeInfoContainer: styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;

    & > button {
      display: flex;
      justify-content: center;

      margin: 1.6rem 1.5rem 0 1.5rem;
      padding: 1.5rem 0;

      ${({ theme }) => theme.fonts.SubTitle1}
      color:${({ theme }) => theme.colors.gray_700};
      background: ${({ theme }) => theme.colors.gray_000};
      border: 0.1rem solid ${({ theme }) => theme.colors.gray_200};
      border-radius: 0.4rem;

      cursor: pointer;

      .point {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 0.8rem;
        padding-left: 0.1rem;
        width: 1.7rem;
        height: 1.7rem;

        ${({ theme }) => theme.fonts.Caption1}
        color: ${({ theme }) => theme.colors.gray_000};
        background: ${({ theme }) => theme.colors.pink_500};
        border-radius: 50%;
      }
    }
  `,
  InfoDescriptionContainer: styled.section`
    height: 26rem;
    padding: 1.8rem 1.5rem 2.8rem 1.5rem;

    background: ${({ theme }) => theme.colors.pink_500};

    .customerGradeInfo {
      display: flex;
      justify-content: space-between;

      width: 100%;
    }

    .description {
      color: ${({ theme }) => theme.colors.gray_000};
      & > h1 {
        ${({ theme }) => theme.fonts.SubHead1};
      }

      & > p {
        ${({ theme }) => theme.fonts.SubTitle4};
        & > strong {
          ${({ theme }) => theme.fonts.Head3};
        }
      }
    }

    .point {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 7rem;
      height: 7rem;

      ${({ theme }) => theme.fonts.Head1}
      color: ${({ theme }) => theme.colors.pink_100};
      background: ${({ theme }) => theme.colors.gray_000};
      border-radius: 50%;
    }
  `,
  GradeFigureContainer: styled.figure`
    aside {
      text-align: center;
      position: relative;

      margin-top: 2.5rem;

      color: ${({ theme }) => theme.colors.gray_000};

      & > p {
        position: absolute;
        top: 1.3rem;

        width: 100%;

        ${({ theme }) => theme.fonts.SubTitle4}
      }

      & > p > .remainAmount,
      .nextGrade {
        ${({ theme }) => theme.fonts.SubTitle1}
      }
    }

    div {
      text-align: center;

      width: 100%;
      margin-top: 1.2rem;

      & > ol {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 0.6rem;

        color: ${({ theme }) => theme.colors.gray_200};
        ${({ theme }) => theme.fonts.SubTitle4}

        & > .selected {
          ${({ theme }) => theme.fonts.SubTitle1}
          color: ${({ theme }) => theme.colors.gray_000};
        }
      }
    }
  `,
};

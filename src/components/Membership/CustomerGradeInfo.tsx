import styled from 'styled-components';

import { GradeBarImg, SpeechBubbleImg } from '../../assets/image';

interface gradeRange {
  grade: string;
  min: number;
  max: number;
  nextGrade: string | undefined;
}

const CustomerGradeInfo = () => {
  const gradeRange: gradeRange[] = [
    {
      grade: 'BABY',
      min: 0,
      max: 100000,
      nextGrade: 'PINK',
    },
    {
      grade: 'PINK',
      min: 100000,
      max: 400000,
      nextGrade: 'GREEN',
    },
    {
      grade: 'GREEN',
      min: 400000,
      max: 700000,
      nextGrade: 'BLACK',
    },
    {
      grade: 'BLACK',
      min: 700000,
      max: 1000000,
      nextGrade: 'GOLD',
    },
    {
      grade: 'GOLD',
      min: 1000000,
      max: Infinity,
      nextGrade: undefined,
    },
  ];

  const getCustomerGrade = (paymentAmount: number) => {
    let grade = '';
    let remainAmount = 0;
    let nextGrade: string | undefined = '';

    gradeRange.map((range) => {
      if (range.min <= paymentAmount && paymentAmount < range.max) {
        grade = range.grade;
        remainAmount = range.max - paymentAmount;
        nextGrade = range.nextGrade;
      }
    });
    return { grade, remainAmount, nextGrade };
  };

  const customerInfo = {
    name: '황현진',
    paymentAmount: 178200, //6개월간 지불한 금액
    remainDate: 64,
    upgradePeriod: '2023년 하반기',
  };

  const { grade, remainAmount, nextGrade } = getCustomerGrade(customerInfo.paymentAmount);

  const gradeList = gradeRange.map((item, idx) => {
    return (
      <li key={idx} className={item.grade === nextGrade ? 'selected' : ''}>
        {item.grade}
      </li>
    );
  });

  return (
    <St.CustomerGradeInfoContainer>
      <section className="customerGradeInfo">
        <div className="description">
          <h1>
            {customerInfo.name}님의 등급
            <br /> {grade} OLIVE
          </h1>
          <p>
            현재 등급 유지까지 <span>{customerInfo.remainDate}</span> 일 남았어요!
          </p>
        </div>
        <span className="point">P</span>
      </section>
      <aside className="speechBubble">
        <img src={SpeechBubbleImg} alt="회원 등급까지 남은 금액을 설명하는 말풍선" />
        <p>
          <span className="remainCostCnt">{remainAmount.toLocaleString()}원 </span>추가 구매 시<br />
          {customerInfo.upgradePeriod} <span className="upgradeCustomerGrade">{nextGrade} OLIVE</span>
        </p>
      </aside>
      <figure className="gradeBar">
        <img src={GradeBarImg} alt="등급 위치를 알려주는 바"></img>
        <ol>{gradeList}</ol>
      </figure>
    </St.CustomerGradeInfoContainer>
  );
};

export default CustomerGradeInfo;

const St = {
  CustomerGradeInfoContainer: styled.main`
    display: flex;
    flex-direction: column;

    width: 100%;
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
        & > span {
          ${({ theme }) => theme.fonts.Head3};
        }
      }
    }

    .point {
      display: flex;
      justify-content: center;
      align-items: center;

      ${({ theme }) => theme.fonts.Head1}
      color: ${({ theme }) => theme.colors.pink_100};
      background: ${({ theme }) => theme.colors.gray_000};

      width: 7rem;
      height: 7rem;

      border-radius: 50%;
    }

    .speechBubble {
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

      & > p > .remainCostCnt,
      .upgradeCustomerGrade {
        ${({ theme }) => theme.fonts.SubTitle1}
      }
    }
    .gradeBar {
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

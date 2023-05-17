import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CloseIcon, InfoIcon } from '../../assets/icon';

import { gradeRange } from './gradeRange';

const GradeBenefitModal = ({ onClose }) => {
  const [grade, setGrade] = useState('PINK');

  const gradeRangeReverse = [...gradeRange].reverse();
  const gradeList = gradeRangeReverse.map((item, idx) => {
    return (
      <St.gradeListContainer key={idx} id={item.grade !== grade ? 'unactivated' : ''}>
        <St.gradeContainer
          id={item.grade.toLowerCase()}
          onClick={(e) => {
            e.stopPropagation();
            setGrade(item.grade);
          }}>
          {item.grade}
          <br />
          OLIVE
        </St.gradeContainer>
      </St.gradeListContainer>
    );
  });

  const curGradeInfo = gradeRange.filter((item) => {
    return item.grade === grade;
  })[0];

  const gradeDescription = (curGrade: string) => {
    switch (curGrade) {
      case 'BABY':
        return `${curGradeInfo.max / 10000}만원 미만 구매`;

      case 'GOLD':
        return `${curGradeInfo.min / 10000}만원 이상 구매`;

      default:
        return `${curGradeInfo.min / 10000}만원 이상 ~ ${curGradeInfo.max / 10000}만원 미만 구매`;
    }
  };

  return (
    <St.GradeBenefitModalContainer>
      <header>
        <div className="title">
          <h1>
            등급별 혜택<img src={InfoIcon} alt="인포메이션 아이콘"></img>
          </h1>
          <h4>등급별 혜택을 확인해보세요!</h4>
        </div>
        <button type="button" onClick={onClose}>
          <img src={CloseIcon} alt="팝업 닫기 아이콘"></img>
        </button>
      </header>
      <figure>{gradeList}</figure>
      <small>6개월간 {gradeDescription(grade)}</small>
    </St.GradeBenefitModalContainer>
  );
};
export default GradeBenefitModal;

const St = {
  GradeBenefitModalContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 1.2rem 1.4rem 1.5rem 1.3rem;

    width: 34.6rem;

    border-radius: 2.1rem;
    box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.25);

    background: ${({ theme }) => theme.colors.gray_000};

    button {
      padding: 0;

      border: none;
      background: none;

      cursor: pointer;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      width: 100%;

      .title {
        display: flex;
        flex-direction: column;

        color: ${({ theme }) => theme.colors.gray_900};

        & > h1 {
          display: flex;
          align-items: center;

          ${({ theme }) => theme.fonts.SubHead1}

          & > img {
            cursor: pointer;
          }
        }

        & > h4 {
          ${({ theme }) => theme.fonts.SubTitle4}
        }
      }
    }

    figure {
      display: flex;
      justify-content: space-around;

      width: 31.9rem;

      margin-top: 2.7rem;
    }

    #unactivated {
      & > div {
        background: ${({ theme }) => theme.colors.gray_100};
        color: ${({ theme }) => theme.colors.gray_300};
      }
    }

    small {
      margin-top: 1.4rem;

      ${({ theme }) => theme.fonts.SubTitle2}
      color: ${({ theme }) => theme.colors.gray_500};
    }
  `,
  gradeListContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    & > #gold {
      height: 8.8rem;

      background: ${({ theme }) => theme.colors.brown_300};
    }

    & > #black {
      height: 7.8rem;

      background: ${({ theme }) => theme.colors.gray_700};
    }

    & > #green {
      height: 6.7rem;

      background: ${({ theme }) => theme.colors.green_500};
    }

    & > #pink {
      height: 5.7rem;

      background: ${({ theme }) => theme.colors.pink_100};
    }

    & > #baby {
      height: 4.6rem;

      background: ${({ theme }) => theme.colors.green_200};
    }
  `,
  gradeContainer: styled.div`
    text-align: center;

    padding-top: 0.7rem;

    width: 5.7rem;

    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;

    ${({ theme }) => theme.fonts.Body1}
    color:${({ theme }) => theme.colors.gray_100};
    background: ${({ theme }) => theme.colors.gray_100};

    cursor: pointer;
  `,
};

import { useState } from 'react';
import styled from 'styled-components';

import { CloseIcon, InfoIcon } from '../../assets/icon';
import { BenefitBabyImg, BenefitBlackImg, BenefitGoldImg, BenefitGreenImg, BenefitPinkImg } from '../../assets/image';

import { GRADE_LIST } from './data/GRADE_LIST';

interface GradeBenefitModalProps {
  onClose: () => void;
  curGrade: string;
}

const GradeBenefitModal = (props: GradeBenefitModalProps) => {
  const { onClose, curGrade } = props;

  const [currentGrade, setCurrentGrade] = useState(curGrade);
  const gradeRangeReverse = [...GRADE_LIST].reverse();
  const gradeList = gradeRangeReverse.map(({ grade }, idx) => {
    return (
      <St.gradeListContainer key={idx} id={grade !== currentGrade ? 'unactivated' : ''}>
        <St.gradeContainer
          id={grade.toLowerCase()}
          onClick={(e) => {
            e.stopPropagation(); // TODO: 클릭했을 때 부모 컴포넌트까지 재랜더링됨
            setCurrentGrade(grade);
          }}>
          {grade}
          <br />
          OLIVE
        </St.gradeContainer>
      </St.gradeListContainer>
    );
  });

  // 현재 선택된 등급에 대한 정보를 가져오는 함수
  const curGradeInfo = GRADE_LIST.filter((item) => {
    return item.grade === currentGrade;
  })[0];

  // 현재 선택된 등급에 대한 구매 금액 관련 설명을 결정하는 함수
  const gradeDescription = () => {
    switch (currentGrade) {
      case 'BABY':
        return `${curGradeInfo.max / 10000}만원 미만 구매`;

      case 'GOLD':
        return `${curGradeInfo.min / 10000}만원 이상 구매`;

      default:
        return `${curGradeInfo.min / 10000}만원 이상 ~ ${curGradeInfo.max / 10000}만원 미만 구매`;
    }
  };

  // 현재 선택된 등급에 대한 혜택 이미지 주소를 가져오는 함수
  const gradeBenefitImg = () => {
    switch (currentGrade) {
      case 'BABY':
        return BenefitBabyImg;
      case 'PINK':
        return BenefitPinkImg;
      case 'GREEN':
        return BenefitGreenImg;
      case 'BLACK':
        return BenefitBlackImg;
      case 'GOLD':
        return BenefitGoldImg;
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
      <small>6개월간 {gradeDescription()}</small>
      <img src={gradeBenefitImg()} alt={`${currentGrade} 등급에 대한 혜택`}></img>
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

    padding: 1.2rem 1.4rem 3.5rem 1.3rem;
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
          margin-top: 0.6rem;

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

    & > img {
      margin-top: 2.7rem;
    }
  `,
  gradeListContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;

    & > div {
      color: ${({ theme }) => theme.colors.gray_000};
    }

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

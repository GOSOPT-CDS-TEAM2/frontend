import styled from 'styled-components';

import { ArrowDownIcon } from '../../assets/icon';

import { CLAUSE_LIST } from './data/CLAUSE_LIST';

const ClauseSection = () => {
  return (
    <St.ClauseSectionContainer>
      {CLAUSE_LIST.map((item, idx) => (
        <article key={idx}>
          <span>{item.title}</span>
          <button type="button">
            <img src={ArrowDownIcon} alt="펼쳐보기 아이콘"></img>
          </button>
        </article>
      ))}
    </St.ClauseSectionContainer>
  );
};

export default ClauseSection;

const St = {
  ClauseSectionContainer: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding-top: 1.1rem;

    background: ${({ theme }) => theme.colors.gray_100};
    & > article {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 1.4rem;

      color: ${({ theme }) => theme.colors.gray_900};
      ${({ theme }) => theme.fonts.SubHead1}
      background: ${({ theme }) => theme.colors.gray_000};
      border-bottom: 0.1rem solid rgba(0, 0, 0, 0.05);
      & > button {
        border: none;
        background: none;
        cursor: pointer;
      }
    }
  `,
};

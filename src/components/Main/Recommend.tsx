import styled from 'styled-components';

import { ArrowIcon } from '../../assets/icon';

const Recommend = () => {
  return (
    <St.RecommendContainer>
      <St.Header>
        <St.Title>황현진님을 위한 추천 상품</St.Title>
        <St.MoreButton type="button">
          더보기
          <img src={ArrowIcon} alt="더보기 아이콘" width={24} height={24} />
        </St.MoreButton>
      </St.Header>
    </St.RecommendContainer>
  );
};

export default Recommend;

const St = {
  RecommendContainer: styled.section`
    width: 100vw;

    margin-top: 2.3rem;
  `,
  Header: styled.header`
    display: flex;
    justify-content: space-between;

    margin-left: 1.4rem;
  `,
  Title: styled.h1`
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
  MoreButton: styled.button`
    display: flex;
    align-items: center;

    height: 2.4rem;

    margin-top: 3.1rem;
    margin-right: 0.7rem;
    padding: 0;

    background: none;
    border: none;
    ${({ theme }) => theme.fonts.SubTitle4};
    color: ${({ theme }) => theme.colors.gray_500};

    line-height: 0;
  `,
};

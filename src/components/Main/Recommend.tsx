import styled from 'styled-components';

const Recommend = () => {
  return (
    <St.RecommendContainer>
      <St.Title>황현진님을 위한 추천 상품</St.Title>
    </St.RecommendContainer>
  );
};

export default Recommend;

const St = {
  RecommendContainer: styled.section`
    /* position: relative;
    display: flex;
    flex-direction: column; */

    width: 100%;

    border: 2px solid black;
  `,
  Title: styled.header`
    margin-top: 2.3rem;
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
};

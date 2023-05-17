import styled from 'styled-components';

const CategoryRank = () => {
  return (
    <St.CategoryRankContainer>
      <St.Title>카테고리 랭킹</St.Title>
    </St.CategoryRankContainer>
  );
};

export default CategoryRank;

const St = {
  CategoryRankContainer: styled.section`
    border: 1px solid red;
  `,
  Title: styled.header`
    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
};

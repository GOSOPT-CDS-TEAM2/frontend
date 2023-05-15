import styled from 'styled-components';

const CategoryNav = () => {
  const MenuList = ['홈', '오특', '신상', '랭킹', '기획전', '이벤트'].map((item, idx) => {
    return (
      <St.CategoryContainer key={idx}>
        <St.Category className={item === '홈' ? 'selected' : ''}>{item}</St.Category>
      </St.CategoryContainer>
    );
  });
  return <St.CategoryNavContainer>{MenuList}</St.CategoryNavContainer>;
};

export default CategoryNav;

const St = {
  CategoryNavContainer: styled.nav`
    display: flex;
    justify-content: space-between;

    width: 37.5rem;
    height: 4.4rem;

    margin-top: 0.1rem;
    padding: 0.8rem 2.9rem 0 1.7rem;
  `,
  CategoryContainer: styled.button`
    display: flex;
    justify-content: center;

    width: 4.4rem;
    height: 3.6rem;

    padding: 0;

    background: none;
    border: none;
  `,
  Category: styled.p`
    height: 2.6rem;

    margin-top: 0.7rem;

    ${({ theme }) => theme.fonts.Title2};

    &.selected {
      margin-top: 0.9rem;

      ${({ theme }) => theme.fonts.Title1};
      color: ${({ theme }) => theme.colors.gray_900};

      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray_900};
    }
  `,
};

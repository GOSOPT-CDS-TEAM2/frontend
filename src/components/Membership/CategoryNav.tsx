import styled from 'styled-components';

const CategoryNav = () => {
  const MenuList = ['멤버십 라운지', '쿠폰/혜택'].map((item, idx) => {
    return (
      <St.CategoryContainer key={idx}>
        <St.Category className={item === '멤버십 라운지' ? 'selected' : ''}>{item}</St.Category>
      </St.CategoryContainer>
    );
  });
  return <St.CategoryNavContainer>{MenuList}</St.CategoryNavContainer>;
};

export default CategoryNav;

const St = {
  CategoryNavContainer: styled.nav`
    display: flex;
    justify-content: space-around;

    width: 100vw;
    height: 4.5rem;

    margin-top: 0.1rem;
  `,

  CategoryContainer: styled.button`
    display: flex;
    justify-content: center;

    height: 3.6rem;
    padding: 0;

    background: none;
    border: none;
  `,
  Category: styled.p`
    height: 2.6rem;
    margin-top: 0.7rem;

    ${({ theme }) => theme.fonts.Title2};
    color: ${({ theme }) => theme.colors.gray_500};

    &.selected {
      margin-top: 0.9rem;

      ${({ theme }) => theme.fonts.Title1};

      color: ${({ theme }) => theme.colors.gray_900};
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray_900};
    }
  `,
};

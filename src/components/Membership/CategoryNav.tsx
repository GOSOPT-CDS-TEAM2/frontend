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

    padding: 0;
    margin-top: 1.1rem;

    background: none;
    border: none;
  `,
  Category: styled.p`
    height: 2.6rem;
    margin: 0;

    height: 3.3rem;

    ${({ theme }) => theme.fonts.SubHead3};
    color: ${({ theme }) => theme.colors.gray_500};

    &.selected {
      ${({ theme }) => theme.fonts.SubHead2};

      color: ${({ theme }) => theme.colors.gray_900};
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray_900};
    }
  `,
};

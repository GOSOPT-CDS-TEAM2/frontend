import styled from 'styled-components';

interface CategoryNavProps {
  cartProductsNum: number;
}

const CategoryNav = (props: CategoryNavProps) => {
  const { cartProductsNum } = props;
  const MenuList = ['일반 배송', '오늘드림&픽업'].map((item, idx) => {
    return (
      <St.CategoryContainer key={idx}>
        {item === '일반 배송' ? (
          <St.Category className="selected">
            {item} ( {cartProductsNum} )
          </St.Category>
        ) : (
          <St.Category>{item} ( 0 )</St.Category>
        )}
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
    width: 100%;

    background: none;
    border: none;
  `,
  Category: styled.p`
    height: 2.6rem;
    margin: 0;

    height: 3.3rem;
    width: 100%;

    ${({ theme }) => theme.fonts.SubHead3};
    color: ${({ theme }) => theme.colors.gray_500};
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray_200};

    &.selected {
      ${({ theme }) => theme.fonts.SubHead2};

      color: ${({ theme }) => theme.colors.gray_900};
      border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray_900};
    }
  `,
};

import styled from 'styled-components';

interface ProductTagContainerProps {
  width: number;
  color: string;
  children: string;
}

interface ProductTagProps {
  children: string;
}

const ProductTag = (props: ProductTagProps) => {
  const { children } = props;
  let width, color;

  switch (children) {
    case 'BEST':
      width = 3.6;
      color = 'pink_100';
      break;

    case '단독':
      width = 3;
      color = 'green_300';
      break;

    case '오늘드림':
      width = 4.6;
      color = 'sky_300';
      break;

    case '증정':
      width = 3;
      color = 'red_300';
      break;

    default:
      width = 3.6;
      color = 'pink_100';
      break;
  }

  return (
    <St.ProductTagContainer width={width} color={color}>
      {children}
    </St.ProductTagContainer>
  );
};

export default ProductTag;

const St = {
  ProductTagContainer: styled.span<ProductTagContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => props.width + 'rem;'};
    height: 1.6rem;

    border-radius: 0.8rem;
    background-color: ${({ theme, color }) => theme.colors[color]};

    color: ${({ theme }) => theme.colors.gray_000};
    ${({ theme }) => theme.fonts.Body1};
  `,
};

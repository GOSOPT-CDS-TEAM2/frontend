import styled from 'styled-components';

const WeeklySpecial = () => {
  return (
    <St.WeeklySpecial>
      <St.Title>Weekly Special</St.Title>
    </St.WeeklySpecial>
  );
};

export default WeeklySpecial;

const St = {
  WeeklySpecial: styled.section`
    margin-top: 3.9rem;
  `,
  Title: styled.h1`
    margin-left: 1.4rem;

    ${({ theme }) => theme.fonts.Head4};
    color: ${({ theme }) => theme.colors.gray_900};
  `,
};

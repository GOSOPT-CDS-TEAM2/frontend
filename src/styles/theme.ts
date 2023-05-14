import { css, DefaultTheme } from 'styled-components';

const colors = {
  gray_900: '#000000',
  gray_700: '#51575E',
  gray_500: '#7C7D7F',
  gray_300: '#989FA9',
  gray_200: '#DBDBDD',
  gray_100: '#F0F1F5',
  gray_000: '#FFFFFF',

  pink_700: '#C56889',
  pink_500: '#DB7499',
  pink_300: '#E088A8',
  pink_100: '#FF68AA',

  green_500: '#54B861',
  green_300: '#A4DE33',
  green_200: '#D0D349',

  red_500: '#E43748',
  red_300: '#EC635A',

  sky_500: '#7CADD5',
  sky_300: '#52C1FF',

  brown_500: '#BE935C',
  brown_300: '#C1Ac5C',

  liner_pink: 'linear-gradient(90deg, #FFE0EB 23.55%, #FFFFFF 100%)',
  liner_gray: 'linear-gradient(90deg, #F0F1F5 36.71%, #FFFFFF 100%)',

  gray_100_80: '#FFFFFFCC',
  gray_100_25: '#FFFFFF40',
  gray_900_60: '#00000099',
};

const fonts = {
  Head1: css`
    font-family: 'Pretendard';
    font-size: 3rem;
    font-weight: 600;
    line-height: 2.2rem;
    letter-spacing: 0.04rem;
  `,
  Head2: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 2.6rem;
    line-height: 2rem;
    letter-spacing: -0.02em;
  `,
  Head3: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.9rem;
    letter-spacing: -0.03rem;
  `,
  Head4: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.2rem;
  `,
  SubHead1: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: -0.02rem;
  `,
  SubHead2: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.2rem;
    letter-spacing: -0.04rem;
  `,
  SubHead3: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    letter-spacing: -0.04rem;
  `,
  Title1: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.02em;
  `,
  Title2: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: -0.04rem;
  `,
  SubTitle1: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.04rem;
  `,
  SubTitle2: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.6rem;
    letter-spacing: 0.02em;
  `,
  SubTitle3: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    letter-spacing: 0.04rem;
  `,
  SubTitle4: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    letter-spacing: -0.04rem;
  `,
  Body1: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.2rem;
  `,
  Body2: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.4rem;
    letter-spacing: 0.06rem;
  `,
  Body3: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
  `,
  Body4: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2rem;
    letter-spacing: -0.04rem;
  `,
  Caption1: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.1rem;
  `,
  Caption2: css`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 0.7rem;
    line-height: 0.8rem;
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};
export default theme;

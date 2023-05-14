import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray_900: string;
      gray_700: string;
      gray_500: string;
      gray_300: string;
      gray_200: string;
      gray_100: string;
      gray_000: string;

      pink_700: string;
      pink_500: string;
      pink_300: string;
      pink_100: string;

      green_500: string;
      green_300: string;
      green_200: string;

      red_500: string;
      red_300: string;

      sky_500: string;
      sky_300: string;

      brown_500: string;
      brown_300: string;

      liner_pink: string;
      liner_gray: string;

      gray_100_80: string;
      gray_100_25: string;
      gray_900_60: string;
    };
    fonts: {
      Head1: SerializedStyles;
      Head2: SerializedStyles;
      Head3: SerializedStyles;
      Head4: SerializedStyles;
      SubHead1: SerializedStyles;
      SubHead2: SerializedStyles;
      SubHead3: SerializedStyles;
      Title1: SerializedStyles;
      Title2: SerializedStyles;
      SubTitle1: SerializedStyles;
      SubTitle2: SerializedStyles;
      SubTitle3: SerializedStyles;
      SubTitle4: SerializedStyles;
      Body1: SerializedStyles;
      Body2: SerializedStyles;
      Body3: SerializedStyles;
      Body4: SerializedStyles;
      Caption1: SerializedStyles;
      Caption2: SerializedStyles;
    };
  }
}

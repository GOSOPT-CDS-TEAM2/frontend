import { 라운드랩자작나무Img, 안트래디언스앰플Img } from '../../../assets/image';
import { ProductData } from '../../../types/common';

export const SPECIAL_DATA: ProductData[] = [
  {
    name: '[하루특가/단독 대용량] 라운드랩 자작나무 수분 크림 120ml 기획 세트',
    originalPrice: 42000,
    discountRate: 43,
    discountPrice: 23900,
    image: 라운드랩자작나무Img,
    likeTF: true,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    name: '[파우치+3일분] 바이탈뷰티 메타그린 슬림업X마이멜로디 기획세트',
    originalPrice: 36000,
    discountRate: 30,
    discountPrice: 25200,
    image: '',
    likeTF: false,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
  {
    name: '[선착순 사은품 증정] V&A 안트 래디언스 앰플',
    originalPrice: 60000,
    discountRate: 38,
    discountPrice: 36900,
    image: 안트래디언스앰플Img,
    likeTF: true,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
];

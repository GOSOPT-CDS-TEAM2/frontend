import { 딥트3일올케어Img, 세노비스Img, 히말라야숙취해소Img } from '../../../assets/image';
import { RecommendProduct } from '../../../types/cart';

export const RECOMMEND_DATA: RecommendProduct[] = [
  {
    name: '[주현영, 이나연 찐템]딥트 3일 수퍼패스트8포 (4일분)',
    originalPrice: 21000,
    discountRate: 35,
    discountPrice: 13500,
    image: 딥트3일올케어Img,
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
    name: '히말라야 숙취해소 파티스마트 츄 10P',
    originalPrice: undefined,
    discountRate: undefined,
    discountPrice: 13500,
    image: 히말라야숙취해소Img,
    likeTF: false,
    tags: {
      BEST: true,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': true,
    },
  },
  {
    name: '세노비스 피부촉촉 히알루론산 10병',
    originalPrice: 28500,
    discountRate: 37,
    discountPrice: 17910,
    image: 세노비스Img,
    likeTF: true,
    tags: {
      BEST: false,
      단독: false,
      오늘드림: true,
      증정: false,
      '1+1': false,
    },
  },
];

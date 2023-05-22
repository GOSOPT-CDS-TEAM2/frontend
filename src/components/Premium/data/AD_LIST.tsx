import { 베스트향광고, 에스티로더작은광고, 에스티로더큰광고 } from '../../../assets/image';

interface Ad {
    name : string;
    image: string;
    header : string;
    comment: string;
}

export const AD_LIST : Ad [] = [
  {
    name: '에스티로더큰광고',
    image: 에스티로더큰광고,
    header: '단 7일, 에스티 로더 그룹',
    comment: '최대 1+1 & 정품 증정💛',
  },
  {
    name: '에스티로더작은광고',
    image: 에스티로더작은광고,
    header: '단 7일 최대 1+1',
    comment: '&정품 증정까지!',
  },
  {
    name: '베스트향광고',
    image: 베스트향광고,
    header: '💛BEST 향💛',
    comment: '최대 20% 할인!',
  },
];

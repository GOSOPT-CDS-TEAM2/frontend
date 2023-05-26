interface Coupon {
  name: string;
  grade: string;
  type: string;
  condition: string;
}

export const COUPON_LIST: Coupon[] = [
  {
    name: '무료배송',
    grade: 'PINK',
    type: '온라인몰',
    condition: '1만원 이상 구매 시',
  },
  {
    name: '무료배송',
    grade: 'PINK',
    type: '오늘드림',
    condition: '1만원 이상 구매 시',
  },
];

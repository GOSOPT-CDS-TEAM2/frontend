import { MemberShipEvent1, MemberShipEvent2, MemberShipEvent3 } from '../../../assets/image';

interface Event {
  imgUrl: string;
  link: string;
  description: string;
}

export const EVENT_LIST: Event[] = [
  { imgUrl: MemberShipEvent1, link: '#', description: '첫 구매 100원부터' },
  { imgUrl: MemberShipEvent2, link: '#', description: '슈퍼브랜드위크 선착순 특가 990원' },
  { imgUrl: MemberShipEvent3, link: '#', description: '5월에도 올리브영을 선물해' },
];

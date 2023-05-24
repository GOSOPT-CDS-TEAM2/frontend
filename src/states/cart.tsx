import { atom } from 'recoil';

import { CartData } from '../types/cart';

export const cartDataState = atom<CartData>({
  key: 'cartDataState',
  default: {
    deliveryFee: 0,
    cartProducts: [
      {
        cartProductId: 0,
        productName: '',
        originalPrice: 0,
        discountPrice: 0,
        productImgSrc: '',
        count: 0,
      },
    ],
  },
});

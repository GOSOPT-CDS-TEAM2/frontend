import { atom } from 'recoil';

import { CartData, Check, Quantity } from '../types/cart';

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

export const overallQuantityState = atom<Quantity[]>({
  key: 'overallQuantityState',
  default: [
    {
      cartProductId: 0,
      count: 0,
    },
  ],
});

export const overallCheckState = atom<Check[]>({
  key: 'overallCheckState',
  default: [
    {
      cartProductId: 0,
      isChecked: true,
    },
  ],
});

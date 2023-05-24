import { atom, selector } from 'recoil';

import { CartData, Check, Quantity } from '../types/cart';

export const cartDataState = atom<CartData>({
  key: 'cartDataState',
  default: {
    deliveryFee: 0,
    cartProducts: [],
  },
});

export const totalQuantitySelector = selector({
  key: 'totalQuantitySelector',
  get: ({ get }) => {
    const cartData = get(cartDataState);
    return cartData.cartProducts.length;
  },
});

export const overallQuantityState = atom<Quantity[]>({
  key: 'overallQuantityState',
  default: [],
});

export const overallCheckState = atom<Check>({
  key: 'overallCheckState',
  default: {},
});

import { CartData, Check, Quantity } from '../types/cart';
import { atom, selector } from 'recoil';

import { getCartData } from '../utils/lib/cart';

export const cartDataState = atom<CartData>({
  key: 'cartDataState',
  default: {
    deliveryFee: 0,
    cartProducts: [],
  },
});

export const cartDataSelector = selector({
  key: 'cardDataSelector',
  get: async () => {
    const {
      data: { data },
    } = await getCartData();
    return data;
  },
});

export const totalQuantitySelector = selector({
  key: 'totalQuantitySelector',
  get: ({ get }) => {
    console.log(get(cartDataState));
    const cartData = get(cartDataState);
    return cartData.cartProducts.length;
  },
});

export const overallQuantityState = atom<Quantity>({
  key: 'overallQuantityState',
  default: {},
});

export const overallCheckState = atom<Check>({
  key: 'overallCheckState',
  default: {},
});

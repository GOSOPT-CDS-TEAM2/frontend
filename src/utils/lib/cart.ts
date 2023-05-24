import { CartQuantityRequest, CartQuantityResponse, CartResponse } from '../../types/cart';

import { client } from '.';

export const getCartData = () => {
  return client.get<CartResponse>(`/api/cart`);
};

export const patchCartQuantityData = (CartQuantityRequest: CartQuantityRequest) => {
  return client.patch<CartQuantityResponse>('/api/cart', CartQuantityRequest);
};

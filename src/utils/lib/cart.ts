import { CartResponse } from '../../types/cart';

import { client } from '.';

export const getCartData = () => {
  return client.get<CartResponse>(`/api/cart`);
};

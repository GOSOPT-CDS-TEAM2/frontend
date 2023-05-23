import { client } from '.';

export const getCartData = async () => {
  return client.get(`/api/cart`);
};

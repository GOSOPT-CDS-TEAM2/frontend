import { client } from '.';

export const getCartData = async () => {
  return await client.get(`/api/cart`);
};

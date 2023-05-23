import { client } from '.';

export const getPremiumBrand = async () => {
  return await client.get(`/api/brand`);
};

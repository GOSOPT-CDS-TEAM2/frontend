import { BrandResponse } from '../../types/brand';

import { client } from '.';

export const getBrandData = async () => {
  return client.get<BrandResponse>(`/api/brand`);
};

export const postBrandData = async (brandId: number) => {
  return client.post<BrandResponse>('/api/brand', { brandId });
};

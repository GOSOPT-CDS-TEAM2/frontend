import { BrandResponse } from '../../types/brand';

import { client } from '.';

export const getBrandData = async () => {
  return client.get<BrandResponse>(`/api/brand`);
};

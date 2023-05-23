import { ProductResponse } from '../../types/main';

import { client } from '.';

export const getRecommendData = () => {
  return client.get<ProductResponse>(`/api/main/recommend`);
};

export const getRangkingData = () => {
  return client.get<ProductResponse>(`/api/main/ranking`);
};

// export const getRecommendData = async () => {
//   return await client.get<ProductResponse>(`/api/main/recommend`);
// };

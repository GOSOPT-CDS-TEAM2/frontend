import { ProductResponse } from '../../types/main';

import { client } from '.';

export const getRecommendData = () => {
  return client.get<ProductResponse>(`/api/main/recommend`);
};

export const getRangkingData = (category: string) => {
  return client.get<ProductResponse>(`/api/main/ranking`, { headers: { category: category } });
};

// export const getRecommendData = async () => {
//   return await client.get<ProductResponse>(`/api/main/recommend`);
// };

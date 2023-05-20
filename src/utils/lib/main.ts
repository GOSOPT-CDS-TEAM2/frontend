import { client } from '.';

export const getRecommendData = async () => {
  return client.get(`/api/main/recommend`);
};

import styled from 'styled-components';

import { RECOMMEND_DATA } from '../cart/constants/RecommendProductData';
import Product from '../common/Product';

const Recommend = () => {
  const productList = RECOMMEND_DATA.map((item) => {
    return <Product key={item.name} productData={item} />;
  });

  return <St.RecommendContainer>{productList}</St.RecommendContainer>;
};

export default Recommend;

const St = {
  RecommendContainer: styled.section``,
};

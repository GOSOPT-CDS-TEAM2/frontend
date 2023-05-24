import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { BrandData } from '../../types/brand';

const BrandCard = ({ brandData }: { brandData: BrandData }) => {
  const [brand, setBrand] = useState(brandData);

  return <img src={brand.logoImage} alt="사진" />;
};

export default BrandCard;

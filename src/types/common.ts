import { ProductServerData } from './main';

export interface ProductData extends ProductServerData {
  tags: {
    BEST: boolean;
    단독: boolean;
    오늘드림: boolean;
    증정: boolean; // 증정 여부
    '1+1': boolean; // 1+1 여부
  };
}

export interface ProductProps {
  productData: ProductData;
}

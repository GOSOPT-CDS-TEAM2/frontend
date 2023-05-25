import { ProductServerData, TagData } from './common';

export interface WeightProduct extends TagData {
  name: string;
  discountRate: number;
  price: number;
  image: string;
}

export interface WeightProductData {
  productData: WeightProduct;
}

export interface ProductResponse {
  data: ProductServerData[];
}

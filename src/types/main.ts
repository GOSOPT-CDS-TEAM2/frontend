export interface WeightProduct {
  name: string;
  discountRate: number;
  price: number;
  image: string;
  tags: {
    BEST: boolean;
    단독: boolean;
    오늘드림: boolean;
    증정: boolean; // 증정 여부
    '1+1': boolean; // 1+1 여부
  };
}

export interface WeightProductProps {
  productData: WeightProduct;
}

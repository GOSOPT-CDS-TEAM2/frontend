export interface CartProductsData {
  cartProductId: number;
  productName: string;
  originalPrice: number;
  discountPrice: number;
  productImgSrc: string;
  count: number;
}

export interface CartData {
  deliveryFee: number;
  cartProducts: CartProductsData[];
}

export interface Quantity {
  cartProductId: number;
  count: number;
}

export interface Check {
  cartProductId: number;
  isChecked: boolean;
}

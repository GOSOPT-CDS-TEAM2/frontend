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
  [key: number]: number;
}

export interface Check {
  [key: number]: boolean;
}

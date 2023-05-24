interface CartProductsData {
  cartProductId: number;
  productName: string;
  originalPrice: number;
  discountPrice: number;
  productImgSrc: string;
  count: number;
}

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

export interface CartResponse {
  data: CartData;
}

interface CartProductsData {
  cartProductId: number;
  productName: string;
  originalPrice: number;
  discountPrice: number;
  productImgSrc: string;
  count: number;
}

export interface CartData {
  cartProducts: CartProductsData[];
  deliveryFee: number;
}

export interface CartResponse {
  data: CartData;
}

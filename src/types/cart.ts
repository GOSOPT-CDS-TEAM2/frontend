export interface CartResponse {
  code: number;
  message: string;
  data: CartData;
}

export interface CartQuantityRequest {
  cartProductId: number;
  changeStatus: boolean;
}

export interface CartQuantityResponse {
  status: number;
  message: string;
  data: CartQuantityData;
}

export interface CartQuantityData {
  cartProductId: number;
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

export interface Quantity {
  [key: number]: number;
}

export interface Check {
  [key: number]: boolean;
}

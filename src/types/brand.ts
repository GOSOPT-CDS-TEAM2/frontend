export interface BrandData {
    id : number; // 아이디
    name: string; // 상품명
    image: string; // 이미지 url
    logoImage: string; // 로고 이미지 url
    likeTF: boolean; // 상품 좋아요 여부
    
}

export interface BrandResponse {
    data : BrandData[];
}

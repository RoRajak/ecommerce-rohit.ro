export interface ProductType {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    reviews: Review[];
    images: string[];
    quantites:number;
    thumbnail: string;
  }
  
  interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
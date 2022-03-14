export interface ImageItem {
  id: number;
  attributes: {
    url: string;
    formats: {
      small?: {
        url: string;
      };
      medium?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  };
}

export interface Product {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    Price: number;
    InstantBuy: boolean;
    Image: {
      data: ImageItem[];
    };
  };
}

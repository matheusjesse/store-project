export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
  }


  export type ProductContextType = {
    products: IProduct[];
    productsSave: (product: IProduct[]) => void;
  };

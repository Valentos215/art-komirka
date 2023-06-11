export interface IProductItem {
  id: string;
  title: string;
  categories: string[];
  img: string;
  cost: number;
  discount?: number;
  popularity: number;
  isAvailable: boolean;
}

export interface ICartItem {
  id: string;
  number: number;
}

export interface ICheckoutItem extends ICartItem {
  title: string;
  cost: number;
}

export interface IWishlistItem {
  id: string;
}

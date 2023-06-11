import { IProduct, IWishlistItem } from "types";

export const isProductInWishlist = (
  product: IProduct,
  wishlist: IWishlistItem[]
) => {
  return wishlist.some((item) => item.id === product.id);
};

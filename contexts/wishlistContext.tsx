import React, { ReactNode } from "react";
import { createContext, useState } from "react";

import { IWishlistItem } from "types";

type TwishlistProviderProps = { children: ReactNode };

export const WishlistContext = createContext<
  [IWishlistItem[], React.Dispatch<React.SetStateAction<IWishlistItem[]>>]
>([[], () => []]);
export const WishlistProvider = ({ children }: TwishlistProviderProps) => {
  const [wishlist, setWishlist] = useState<IWishlistItem[]>([]);
  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {children}
    </WishlistContext.Provider>
  );
};

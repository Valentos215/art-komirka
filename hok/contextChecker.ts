import { useContext, useEffect } from "react";

import { CartContext } from "contexts/cartContext";
import { WishlistContext } from "contexts/wishlistContext";
import useLocalStorage from "shared/hooks/useLocalStorage";

type TCartCheckerProps = { children: any };

const ContextChecker = ({ children }: TCartCheckerProps) => {
  const [cart, setCart] = useContext(CartContext);
  const [wishist, setWishlist] = useContext(WishlistContext);
  const [localCart, setLocalCart] = useLocalStorage("cart");
  const [localWishlist, setLocalWishlist] = useLocalStorage("wishlist");

  useEffect(() => {
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    if (localWishlist) {
      setWishlist(JSON.parse(localWishlist));
    }
  }, []);

  useEffect(() => {
    if (!cart) {
      return;
    }

    setLocalCart(JSON.stringify(cart));
  }, [cart, setLocalCart]);

  useEffect(() => {
    if (!wishist) {
      return;
    }

    setLocalWishlist(JSON.stringify(wishist));
  }, [wishist, setLocalWishlist]);

  return children;
};

export default ContextChecker;

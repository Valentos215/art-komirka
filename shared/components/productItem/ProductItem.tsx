import { useContext, useState } from "react";
import Image from "next/image";

import { CartContext } from "contexts/cartContext";
import { WishlistContext } from "contexts/wishlistContext";
import Show from "shared/components/show/Show";
import { isProductInCart } from "utils/cart.utils";
import { IProductItem } from "types";

import s from "shared/components/productItem/ProductItem.module.scss";
import { useRouter } from "next/router";
import { isProductInWishlist } from "utils/wishlist.utils";

interface IProductItemProps {
  product: IProductItem;
}

const ProductItem = ({ product }: IProductItemProps) => {
  const { id, title, img, cost, discount } = product;
  const [cart, setCart] = useContext(CartContext);
  const [wishlist, setWishlist] = useContext(WishlistContext);

  const router = useRouter();

  const addToCard = () => {
    setCart((prevCart) => {
      return [...prevCart, { id, number: 1 }];
    });
  };

  const goToCard = () => {
    router.push("/checkout");
  };

  const addToWishlist = () => {
    setWishlist((prevWishlist) => {
      return [...prevWishlist, { id }];
    });
  };

  const removeFromWishlist = () => {
    setWishlist((prevWishlist) => {
      return prevWishlist.filter((item) => item.id !== id);
    });
  };

  const costClassnames = () => {
    if (discount) {
      return `${s.cost__main} ${s.line_through}`;
    } else {
      return s.cost__main;
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img className={s.image__main} src={img} alt={title} />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.row}>
        <Show condition={product.isAvailable}>
          <div className={s.cost}>
            <span className={costClassnames()}>{cost}₴</span>
            <Show condition={!!discount}>
              <span className={s.cost__discount}>{discount}₴</span>
            </Show>
          </div>
        </Show>
        <div className={s.wishlist}>
          <Show condition={!isProductInWishlist(product, wishlist)}>
            <Image
              src="/Heart_empty.svg"
              alt="Heart_empty"
              height={20}
              width={20}
              onClick={addToWishlist}
            />
          </Show>
          <Show condition={isProductInWishlist(product, wishlist)}>
            <Image
              src="/Heart_full.svg"
              alt="Heart_full"
              height={20}
              width={20}
              onClick={removeFromWishlist}
            />
          </Show>
        </div>
      </div>

      <Show condition={!isProductInCart(product, cart) && product.isAvailable}>
        <button className={s.addToCard} onClick={addToCard}>
          Купити
        </button>
      </Show>
      <Show condition={isProductInCart(product, cart) && product.isAvailable}>
        <div className={s.goToCard}>
          <button onClick={goToCard}>Перейти до кошика</button>
          <div className={s.goToCard__image}>
            <Image src="/Cart.svg" alt="Cart logo" height={18} width={18} />
          </div>
        </div>
      </Show>
      <Show condition={!product.isAvailable}>
        <div className={s.noAvailable}>Немає в наявності</div>
      </Show>
    </div>
  );
};

export default ProductItem;

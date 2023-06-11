import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { ExpandContext } from "contexts/expandContext";
import { CartContext } from "contexts/cartContext";
import { getTotalNumber } from "utils/cart.utils";
import Show from "shared/components/show/Show";

import s from "./Cart.module.scss";
import { EApiPath } from "constants/index";

const Cart = () => {
  const [cart] = useContext(CartContext);
  const [, setExpanded] = useContext(ExpandContext);

  const cartIsEmpty = !cart.length;

  const { asPath } = useRouter();

  return (
    <Link
      href={!cartIsEmpty ? EApiPath.Checkout : asPath}
      className={s.cart}
      onClick={() => setExpanded(false)}
    >
      <Image src="/Cart.svg" alt="Cart logo" height={16} width={16} />
      <Show condition={!cartIsEmpty}>
        <span>{getTotalNumber(cart)}</span>
      </Show>
    </Link>
  );
};

export default Cart;

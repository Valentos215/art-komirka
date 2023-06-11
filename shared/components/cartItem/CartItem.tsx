import { useContext } from "react";

import { CartContext } from "contexts/cartContext";
import Show from "shared/components/show/Show";
import { minusItem, plusItem, removeItem } from "utils/cart.utils";
import { ICheckoutItem } from "types";

import s from "shared/components/cartItem/CartItem.module.scss";

interface ICartItemProps {
  item: ICheckoutItem;
}

const CartItem = ({ item }: ICartItemProps) => {
  const [, setCart] = useContext(CartContext);

  return (
    <div className={s.item}>
      <div className={s.item__head}>
        <h3>{item.title}</h3>
        <span onClick={() => removeItem(setCart, item.id)} />
      </div>
      <div className={s.item__total}>
        <div className={s.item__total_amount}>
          {item.cost}.00<span> uah</span>
        </div>
        <div className={s.item__total_counter}>
          <span onClick={() => minusItem(setCart, item.id)} />
          <p>{item.number}</p>
          <span onClick={() => plusItem(setCart, item.id)} className={s.plus} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

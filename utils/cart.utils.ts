import { ICartItem, IProduct } from "types";

export const minusItem = (setCart: any, itemId: string) => {
  setCart((prevCart: ICartItem[]) => {
    return prevCart
      .filter((i) => !(i.id === itemId && i.number === 1))
      .map((i) => {
        if (i.id === itemId) {
          return { ...i, number: i.number - 1 };
        }
        return i;
      });
  });
};

export const plusItem = (setCart: any, itemId: string) => {
  setCart((prevCart: ICartItem[]) => {
    return prevCart.map((i) => {
      if (i.id === itemId && i.number < 99) {
        return { ...i, number: i.number + 1 };
      }
      return i;
    });
  });
};

export const removeItem = (setCart: any, itemId: string) => {
  setCart((prevCart: ICartItem[]) =>
    prevCart.filter((i) => !(i.id === itemId))
  );
};

export const getItemCost = (item: ICartItem, products: IProduct[]) => {
  const currentItem = products.find((product) => product.id === item.id);
  return currentItem?.discount || currentItem?.cost || 0;
};

export const getTotalAmount = (cart: ICartItem[], products: IProduct[]) => {
  let total = 0;
  cart.forEach((item) => {
    total = total + getItemCost(item, products) * item.number;
  });

  return total;
};

export const getTotalNumber = (cart: ICartItem[]) => {
  let total = 0;
  cart.forEach((item) => {
    total = total + item.number;
  });
  return total;
};

export const isProductInCart = (product: IProduct, cart: ICartItem[]) => {
  return cart.some((item) => item.id === product.id);
};

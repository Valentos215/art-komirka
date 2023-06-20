import { IProductItem } from "types";

interface IProductsToShowParams {
  productItems: IProductItem[] | null;
  filter: string[] | null;
  sort: number;
}

type TProductsToShowResult = IProductItem[] | null;

export const productsToShow = ({
  productItems,
  filter,
  sort,
}: IProductsToShowParams): TProductsToShowResult => {
  if (!productItems) {
    return null;
  }

  let filtered: IProductItem[];

  if (filter?.length) {
    filtered = productItems.filter((product: IProductItem) =>
      filter.every((category) => product.categories.includes(category))
    );
  } else {
    filtered = productItems;
  }

  if (sort === -1) {
    return filtered;
  }

  if (sort === 0) {
    return filtered.sort((a, b) => b.popularity - a.popularity);
  }

  if (sort === 1) {
    return filtered.sort(
      (a, b) => (a.discount || a.cost) - (b.discount || b.cost)
    );
  }

  if (sort === 2) {
    return filtered.sort(
      (a, b) => (b.discount || b.cost) - (a.discount || a.cost)
    );
  }

  return null;
};

export const getFiltersList = (
  products: IProductItem[] | null
): string[] | null => {
  if (!products) {
    return null;
  }

  const arr: string[] = [];

  products.forEach((product) => {
    if (!product.categories.length) {
      return;
    }
    product.categories.forEach((category) => {
      if (!arr.includes(category)) {
        arr.push(category);
      }
    });
  });

  return arr;
};

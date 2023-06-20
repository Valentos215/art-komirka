import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import Filter from "shared/components/filter/Filter";
import Sort from "shared/components/sort/Sort";
import ProductItem from "shared/components/productItem/ProductItem";
import Show from "shared/components/show/Show";
import { ExpandContext } from "contexts/expandContext";
import { getFiltersList, productsToShow } from "utils/products.utils";
import { IProductItem } from "types";
import { PRODUCTS_SORT_CRITERIA } from "constants/index";

import s from "./products.module.scss";

type TProductsProps = { productItems: IProductItem[]; title: string };

const Products = ({ productItems, title }: TProductsProps) => {
  const [filter, setFilter] = useState<string[] | null>(null);
  const [sort, setSort] = useState<number>(-1);
  const [expanded] = useContext(ExpandContext);

  const itemsList = productsToShow({ productItems, filter, sort });

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  const { asPath } = useRouter();

  const filtersList = getFiltersList(productItems);

  const productItemsClassNames = () => {
    if (itemsList && itemsList?.length > 2) {
      return s.productItems;
    } else {
      return s.minimumItems;
    }
  };

  return (
    <>
      <div className={scrollClassNames}>
        <div className={"container"}>
          <main className={s.wrapper}>
            <h1 className={s.title}>{title}</h1>
            <div className={s.filters}>
              <Show condition={!!productItems && !!filtersList?.length}>
                <Filter specification={filtersList} setFilter={setFilter} />
              </Show>
              <div className={s.filters__space}></div>
              <Sort sortCriteria={PRODUCTS_SORT_CRITERIA} setSort={setSort} />
            </div>
            <Show condition={!!filter}>
              <div className={s.title}>{filter && filter.join(", ")}</div>
            </Show>
            <div className={productItemsClassNames()}>
              <Show condition={!!itemsList}>
                {!!itemsList &&
                  itemsList.map((product: IProductItem) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
              </Show>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Products;

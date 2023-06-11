import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

import Filter from "shared/components/filter/Filter";
import Sort from "shared/components/sort/Sort";
import ProductItem from "shared/components/productItem/ProductItem";
import Show from "shared/components/show/Show";
import { ExpandContext } from "contexts/expandContext";
import {
  getFilteredCategories,
  IProduct,
  productsToShow,
} from "utils/products.utils";
import { NAV_MENU, PRODUCTS_SORT_CRITERIA } from "constants/index";

import s from "styles/products.module.scss";

type TProductsProps = { products: IProduct[] };

const Products = ({ products }: TProductsProps) => {
  const [filter, setFilter] = useState<string[] | null>(null);
  const [sort, setSort] = useState<number>(-1);
  const [expanded] = useContext(ExpandContext);

  const itemsList = productsToShow({ products, filter, sort });

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  const { asPath } = useRouter();

  const keywords = products.map((product) => product.title).join(", ");

  return (
    <>
      <Head>
        <title>{asPath.charAt(1).toUpperCase() + asPath.slice(2)}</title>
        <meta name="keywords" content={keywords} />
      </Head>
      <div className={scrollClassNames}>
        <div className={"container"}>
          <main className={s.wrapper}>
            <div className={s.filters}>
              <Show condition={!!products && !!products[0].category}>
                <Filter
                  title="Category"
                  specification={getFilteredCategories(products)}
                  setFilter={setFilter}
                />
              </Show>
              <div className={s.filters__space}></div>
              <Sort sortCriteria={PRODUCTS_SORT_CRITERIA} setSort={setSort} />
            </div>
            <Show condition={!!filter}>
              <div className={s.title}>{filter && filter.join(", ")}</div>
            </Show>
            <div className={s.pizzaItems}>
              <Show condition={!!itemsList}>
                {!!itemsList &&
                  itemsList.map((product: IProduct) => (
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

export async function getStaticProps() {
  const response = await axios.get(
    process.env.REACT_APP_BASE_URL + NAV_MENU[1].link
  );
  const pizzas = response.data;

  if (!pizzas) {
    return { notFound: true };
  }

  return {
    props: { pizzas },
  };
}

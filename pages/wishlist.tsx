import { useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

import Filter from "shared/components/filter/Filter";
import Sort from "shared/components/sort/Sort";
import ProductItem from "shared/components/productItem/ProductItem";
import Show from "shared/components/show/Show";
import { ExpandContext } from "contexts/expandContext";
import { getFiltersList, productsToShow } from "utils/products.utils";
import { IProductItem } from "types";
import { NAV_MENU, PRODUCTS_SORT_CRITERIA } from "constants/index";
import { WishlistContext } from "contexts/wishlistContext";

import s from "styles/products.module.scss";

type TProductsProps = { products: IProductItem[] };

const Products = ({ products }: TProductsProps) => {
  const [expanded] = useContext(ExpandContext);
  const [wishist] = useContext(WishlistContext);

  const itemsList = products.filter((product) =>
    wishist.some((item) => item.id === product.id)
  );

  const scrollClassNames = expanded ? "scroll off" : "scroll";

  const productItemsClassNames = () => {
    if (itemsList && itemsList?.length > 2) {
      return s.productItems;
    } else {
      return s.minimumItems;
    }
  };

  return (
    <>
      <Head>
        <title>Список бажань</title>
      </Head>
      <div className={scrollClassNames}>
        <div className={"container"}>
          <main className={s.wrapper}>
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

type TGetServerSideProps = { params: { productsPage: string } };

export async function getStaticProps() {
  //   const response = await axios.get(
  //     process.env.REACT_APP_BASE_URL + NAV_MENU[0].link
  //   );
  //   const products = response.data;

  const products = [
    {
      id: "gbdfg5bfd5gb5gb",
      title: "Кутова полиця Double Cube",
      categories: ["Кутові", "Куби"],
      img: "https://expandfurniture.com/wp-content/uploads/2015/09/Modular-Corner-Cube-Wall-Shelf-M-in-white-and-orange-1.jpg",
      cost: 800,
      discount: 699,
      popularity: 8,
      isAvailable: true,
    },
    {
      id: "hbdfg8bfd55gbgb",
      title: "Кутова полиця Double Cube",
      categories: ["Консольні", "Куби"],
      img: "https://expandfurniture.com/wp-content/uploads/2015/09/Modular-Corner-Cube-Wall-Shelf-M-in-white-and-orange-1.jpg",
      cost: 700,
      discount: 599,
      popularity: 5,
      isAvailable: true,
    },
    {
      id: "hhn5ghng8bfd55gbgb",
      title: "Кутова полиця Double Cube",
      categories: ["Кутові", "Консольні"],
      img: "https://expandfurniture.com/wp-content/uploads/2015/09/Modular-Corner-Cube-Wall-Shelf-M-in-white-and-orange-1.jpg",
      cost: 850,
      popularity: 6,
      isAvailable: true,
    },
    {
      id: "5hn5ghng8bfd58gbgb",
      title: "Кутова полиця Double Cube",
      categories: ["Кутові", "Куби"],
      img: "https://expandfurniture.com/wp-content/uploads/2015/09/Modular-Corner-Cube-Wall-Shelf-M-in-white-and-orange-1.jpg",
      cost: 740,
      popularity: 4,
      isAvailable: true,
    },
    {
      id: "uhn7ghng8bfd78gbgb",
      title: "Кутова полиця Double Cube",
      categories: ["Кутові"],
      img: "https://expandfurniture.com/wp-content/uploads/2015/09/Modular-Corner-Cube-Wall-Shelf-M-in-white-and-orange-1.jpg",
      cost: 750,
      popularity: 10,
      isAvailable: false,
    },
  ];

  if (!products) {
    return { notFound: true };
  }

  return {
    props: { products },
  };
}
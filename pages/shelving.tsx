import Products from "components/products/Products";
import Show from "shared/components/show/Show";
import { IProductItem } from "types";

type TProductsProps = { productItems: IProductItem[] };

const Shelving = ({ productItems }: TProductsProps) => {
  const title = "Стелажі";

  return (
    <Show condition={!!productItems}>
      <Products productItems={productItems} title={title} />
    </Show>
  );
};

export default Shelving;

export async function getServerSideProps() {
  //   const response = await axios.get(
  //     process.env.REACT_APP_BASE_URL + NAV_MENU[0].link
  //   );
  //   const products = response.data;

  const productItems = [
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

  if (!productItems) {
    return { notFound: true };
  }

  return {
    props: { productItems },
  };
}

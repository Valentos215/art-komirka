export const NAV_MENU = [
  { title: "Полиці", link: "/", logo: "/Pizza.svg" },
  { title: "Стелажі", link: "/shelving", logo: "/Drinks.svg" },
  { title: "Інформація", link: "/information", logo: "/Dessert.svg" },
];

export const ERROR_MES = {
  NameLong: "Ім'я надто довге",
  NameShort: "Ім'я надто коротке",
  NameRequired: "Введіть ім'я",
  NameValid: "Будьласка, використовуйте тільки літери",
  EmailLength: "E-mail надто довгий",
  EmailRequired: "Введіть E-mail",
  EmailIncorrect: "Некорректний E-mail",
  PhoneRequired: "Введіть номер телефону",
};

export const NAME_VALIDATION = /^[A-Za-z]+$/;

export const PRODUCTS_SORT_CRITERIA = [
  "Популярність",
  "Спочатку дешевші",
  "Спочатку дорожчі",
];

export enum EApiPath {
  Root = "/",
  Shelving = "shelving",
  Checkout = "checkout",
  information = "information",
  Wishlist = "wishlist",
}

export enum EApiPath {
  Shelves = "/",
  Shelving = "/shelving",
  Checkout = "/checkout",
  Information = "/information",
  Wishlist = "/wishlist",
}

export const NAV_MENU = [
  { title: "Полиці", link: EApiPath.Shelves, logo: "/Pizza.svg" },
  { title: "Стелажі", link: EApiPath.Shelving, logo: "/Drinks.svg" },
  { title: "Інформація", link: EApiPath.Information, logo: "/Dessert.svg" },
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

import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import CartPanel from "components/header/cartPanel/CartPanel";
import WishlistPanel from "./wishlistPanel/WishlistPanel";
import ExpandedMenu from "components/header/expandedMenu/ExpandedMenu";
import { ExpandContext } from "contexts/expandContext";
import { NAV_MENU } from "constants/index";

import s from "components/header/Header.module.scss";

const Header = () => {
  const [expanded, setExpanded] = useContext(ExpandContext);

  const burgerClassName = expanded ? `${s.burger} ${s.active}` : s.burger;

  const { asPath } = useRouter();

  const linkClassName = (path: string) => {
    if (path === asPath) {
      return `${s.nav__link} ${s.active}`;
    }
    return s.nav__link;
  };

  return (
    <>
      <ExpandedMenu expanded={expanded} setExpanded={setExpanded} />
      <header className={s.header}>
        <div className="container">
          <div className={s.header__wrapper}>
            <div
              className={burgerClassName}
              onClick={() => setExpanded(!expanded)}
            >
              <span></span>
              <span></span>
            </div>
            <Link href="/" className={s.header__logo}>
              <span onClick={() => setExpanded(false)}>Арт-комірка</span>
            </Link>
            <nav className={s.nav}>
              {NAV_MENU.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className={linkClassName(item.link)}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
            <div className={s.right_column}>
              <WishlistPanel />
              <CartPanel />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

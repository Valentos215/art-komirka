import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import { ExpandContext } from "contexts/expandContext";
import { WishlistContext } from "contexts/wishlistContext";
import Show from "shared/components/show/Show";
import { EApiPath } from "constants/index";

import s from "./Wishlist.module.scss";

const Wishlist = () => {
  const [wishist] = useContext(WishlistContext);
  const [, setExpanded] = useContext(ExpandContext);

  const { asPath } = useRouter();

  return (
    <Link
      href={!!wishist.length ? EApiPath.Wishlist : asPath}
      className={s.wishlist}
      onClick={() => setExpanded(false)}
    >
      <Image src="/Heart_white.svg" alt="Heart full" height={20} width={20} />
      <Show condition={!!wishist.length}>
        <span>{wishist.length}</span>
      </Show>
    </Link>
  );
};

export default Wishlist;

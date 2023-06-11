import type { AppProps } from "next/app";

import { ExpandProvider } from "contexts/expandContext";
import { CartProvider } from "contexts/cartContext";
import { WishlistProvider } from "contexts/wishlistContext";
import ContextChecker from "hok/contextChecker";
import Layout from "components/Layout";

import "styles/app.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ExpandProvider>
      <CartProvider>
        <WishlistProvider>
          <ContextChecker>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContextChecker>
        </WishlistProvider>
      </CartProvider>
    </ExpandProvider>
  );
}

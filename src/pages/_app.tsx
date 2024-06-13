// pages/_app.tsx

import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPath = router.pathname;
  const hideFooter =
    currentPath === "/loginPage" ||
    currentPath === "/registerPage" ||
    currentPath === "/resetPasswordPage" ||
    currentPath === "/loginAdminPage"||
    currentPath === "/homeAdmin" ||
    currentPath === "/artikelAdmin" ||
    currentPath === "/inputBerita" ||
    currentPath === "/donasiAdmin";
  const hideHeader =
    currentPath === "/loginPage" ||
    currentPath === "/registerPage" ||
    currentPath === "/resetPasswordPage" ||
    currentPath === "/homeAdmin" ||
    currentPath === "/artikelAdmin" ||
    currentPath === "/donasiAdmin" ||
    currentPath === "/inputBerita" ||
    currentPath === "/loginAdminPage";

  return (
    <SessionProvider>
      <Layout hideFooter={hideFooter} hideHeader={hideHeader}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

// components/Layout.tsx

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type ChildrenType = {
  children: ReactNode;
  hideHeader: boolean;
  hideFooter: boolean;
};

export default function Layout({
  children,
  hideHeader,
  hideFooter,
}: ChildrenType) {
  return (
    <>
      {!hideHeader && <Header />}
      <main>{children}</main>
      {!hideFooter && <Footer />}
    </>
  );
}

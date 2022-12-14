import React from "react";
import dynamic from "next/dynamic";

import { Footer } from "./Footer";
import { _Header } from "./Header";
// import Material from "../Material";

const Material = dynamic(() => import("../Material"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <div className="xl:h-24 xl:w-24 sm:h-16 sm:w-16 h-10 w-10"></div>
    </div>
  ),
});

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="2xl:mx-96 xl:mx-64 lg:mx-48 mx-5 mt-5">
      <_Header />
      <Material />
      <main className="sm:mx-24 mx-3">{children}</main>
      <Footer />
    </div>
  );
};

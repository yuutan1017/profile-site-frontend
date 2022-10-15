import React from "react";
import Material from "../Material";

import { Footer } from "./Footer";
import { HeaderResponsive } from "./HeaderResponsive";

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-24 sm:px-10 mx-5 mt-5 ">
      <HeaderResponsive />
      <Material />
      <main className="min-h-screen sm:mx-24 mx-3">{children}</main>
      <Footer />
    </div>
  );
};

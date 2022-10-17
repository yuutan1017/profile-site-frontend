import React from "react";
import dynamic from "next/dynamic";
import { Loader } from "@mantine/core";

import { Footer } from "./Footer";
import { HeaderResponsive } from "./HeaderResponsive";


const Material = dynamic(() => import("../Material"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader variant="oval" size="md" />
    </div>
  ),
});

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-24 sm:px-10 mx-5 mt-5 ">
      <HeaderResponsive />
      <Material />
      <main className="sm:mx-24 mx-3">{children}</main>
      <Footer />
    </div>
  );
};

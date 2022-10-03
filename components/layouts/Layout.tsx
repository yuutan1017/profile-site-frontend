import React from "react";
import { Footer } from "./Footer";
import { HeaderResponsive } from "./HeaderResponsive";

export const Layout = ({ children }: any): JSX.Element => {
  const links = [
    {
      link: "/about",
      label: "Features",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
    {
      link: "/learn",
      label: "Learn",
    },
    {
      link: "/community",
      label: "Community",
    },
  ];
  return (
    <div style={{margin: "2rem 24rem"}}>
      <HeaderResponsive links={links} />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

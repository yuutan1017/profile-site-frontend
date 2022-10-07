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
      link: "/skills",
      label: "Skills",
    },
    {
      link: "/works",
      label: "Works",
    },
    {
      link: "https://github.com/yuutan1017/profile-site-remake",
      label: "Source",
    },
  ];
  return (
    <div className="2xl:mx-96 xl:mx-64 lg:mx-48 md:mx-24 mx-5 mt-5">
      <HeaderResponsive links={links} />
      <main className="min-h-screen sm:mx-10">{children}</main>
      <Footer />
    </div>
  );
};

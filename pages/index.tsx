import type { NextPage } from "next";

import { Skills } from "../components/Skills";
import { About } from "../components/About";
import { Works } from "../components/Works";

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Skills />
      <Works />
    </>
  );
};

export default Home;

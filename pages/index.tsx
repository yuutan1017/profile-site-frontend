import type { NextPage } from "next";

import { Skills } from "../components/Skills";
import { TopArticle } from "../components/TopArticle";
import { Works } from "../components/Works";

const Home: NextPage = () => {
  return (
    <>
      <TopArticle />
      <Skills />
      <Works />
    </>
  );
};

export default Home;

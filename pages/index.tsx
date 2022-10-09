import { Loader } from "@mantine/core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { Layout } from "../components/layouts/Layout";
import { Skills } from "../components/Skills";
import { TopArticle } from "../components/TopArticle";

// import Material  from "../components/layouts/Material";

const Material = dynamic(() => import("../components/Material"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader variant="oval" size="md" />
    </div>
  ),
});

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Material />
        <TopArticle />
        <Skills />
      </Layout>
    </>
  );
};

export default Home;

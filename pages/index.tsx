import { Loader } from "@mantine/core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { Layout } from "../components/layouts/Layout";
import { TopArticle } from "../components/TopArticle";

const Material = dynamic(() => import("../components/layouts/Material"), {
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
      </Layout>
    </>
  );
};

export default Home;

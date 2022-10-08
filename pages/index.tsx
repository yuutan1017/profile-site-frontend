import { Loader } from "@mantine/core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { Layout } from "../components/layouts/Layout";

const Material = dynamic(() => import("../components/layouts/Material"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Loader variant="bars" size="lg" />
    </div>
  ),
});

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Material />
      </Layout>
    </>
  );
};

export default Home;

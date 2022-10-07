import type { NextPage } from "next";
import dynamic from "next/dynamic";

import { Layout } from "../components/layouts/Layout";

const Material = dynamic(() => import("../components/layouts/Material"), {
  ssr: false,
  loading: () => <p className="flex justify-center">Loading...</p>,
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

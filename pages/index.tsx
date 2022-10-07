import type { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";
import { Material } from "../components/layouts/Material";

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

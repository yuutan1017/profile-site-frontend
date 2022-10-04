import type { NextPage } from "next";
import { Layout } from "../components/layouts/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="min-h-screen sm:mx-10 p-6">main</div>
      </Layout>
    </>
  );
};

export default Home;

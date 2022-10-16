import { Loader } from "@mantine/core";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Layout } from "../components/layouts/Layout";
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

import Image from "next/image";
import { motion } from "framer-motion";
import { Text } from "@mantine/core";

import { AnimatedText } from "./motion/AnimatedText";
import { useStyles } from "./layouts/style";
import { topArticle } from "./motion/Motion";
import Link from "next/link";

export const About = () => {
  const { classes, cx } = useStyles();
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:text-3xl text-xl mt-20">
        <AnimatedText text="Welcome and thanks for" />
        <AnimatedText text="visiting my website!!" />
      </div>
      <motion.section
        variants={topArticle}
        initial="hidden"
        animate="visible"
        className="mt-20"
      >
        <div>
          <Text weight={600} className={cx(classes.chapter)}>
            About
          </Text>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:px-8 flex flex-col mx-1 mt-12">
          <div className="mt-8 xl:pl-10">
            <Text size="md">
              はじめまして。ユウタと申します。飲食店勤務5年目です。
            </Text>
            <Text size="md">
              趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
            </Text>
            <Text size="md">
              直近ではPHP/LaravelやJava/SpringBootを中心に学んでいます。
            </Text>
            <div className="flex flex-row mt-5 space-x-2">
              <Text size="sm">GitHub : </Text>
              <Link href="https://github.com/yuutan1017" passHref>
                <a className="hover:text-blue-400 hover:border-b hover:border-b-blue-400">https://github.com/yuutan1017</a>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-8">
            <Image
              alt="topImage"
              src="/images/top.jpg"
              width="180"
              height="160"
              className="rounded-full xl:mt-4"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

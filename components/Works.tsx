import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useStyles } from "./layouts/style";
import { works } from "./motion/Motion";

const data = [
  {
    id: 0,
    title: "育児休業給付金　計算ツール",
    image: "/images/benefits.jpg",
    alt: "育児休業給付金　計算ツール",
    component: "article",
    description:
      "育休中に働く場合の条件や給付される金額、お金のことにを中心にまとめています。",
    href: "https://benefits-calculator.vercel.app/",
  },
  {
    id: 1,
    title: "ウェブスクレイピング",
    image: "/images/webScraping.jpg",
    alt: "ウェブスクレイピング",
    component: "article",
    description:
      "現職でエクセルに打ち込む業務があり、それを自動化したいと思い勉強しました。" +
      "web操作はseleniumで行いまいした。",
  },
  {
    id: 2,
    title: "File Picker",
    image: "/images/FilePicker.jpg",
    alt: "File Picker",
    component: "article",
    description: "File System Access APIを使い作成しました。",
    href: "https://upload-site.vercel.app/",
  },
];

export function Works() {
  const { classes, cx } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 8000 }));
  const cards = data.map((article: any) => (
    <Carousel.Slide
      key={article.id}
      className="flex justify-center items-center my-4"
    >
      <Card
        key={article.title}
        p="md"
        target="_blank"
        radius="lg"
        component={article.component}
        href={article.href}
        className="w-80 border shadow-xl sm:mx-3 mx-1"
      >
        <Image
          src={article.image}
          alt={article.alt}
          width="350"
          height="200"
          className="rounded-md"
        />
        <Text mt={16} mb={16} weight={600}>
          {article.title}
        </Text>
        <Text size="sm" color="dimmed">
          {article.description}
        </Text>
        {article.href ? (
          <div className="mt-6 hover:text-blue-500">
            <Link href={article.href} passHref>
              <a>デモページはこちら</a>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </Card>
    </Carousel.Slide>
  ));

  return (
    <motion.div
      className="mb-10"
      variants={works}
      initial="hidden"
      animate="visible"
    >
      <div className="mb-10 mt-20">
        <Text className={cx(classes.chapter)} weight={600}>
          Works
        </Text>
      </div>
      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        loop
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        mx="auto"
        align="start"
      >
        {cards}
      </Carousel>
    </motion.div>
  );
}

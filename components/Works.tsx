import { motion } from "framer-motion";
import Image from "next/image";
import { SimpleGrid, Card, Text, Container } from "@mantine/core";

import { useStyles } from "./layouts/style";
import { works } from "./motion/Motion";

const data = [
  {
    title: "育児休業給付金　計算ツール",
    image: "/images/benefits.jpg",
    alt: "育児休業給付金　計算ツール",
    component: "a",
    description:
      "育休中に働く場合の条件や給付される金額、お金のことにを中心にまとめています。",
    href: "https://paternity-leave.vercel.app/",
  },
  {
    title: "ウェブスクレイピング",
    image: "/images/webScraping.jpg",
    alt: "ウェブスクレイピング",
    component: "article",
    description:
      "現職でエクセルに打ち込む業務があり、それを自動化したいと思い勉強しました。" +
      "web操作はseleniumで行いまいした。",
  },
];

export function Works() {
  const { classes, cx } = useStyles();
  const cards = data.map((article: any) => (
    <Card
      key={article.title}
      p="md"
      target="_blank"
      radius="lg"
      component={article.component}
      href={article.href}
      className={cx(classes.card)}
    >
      <Image src={article.image} alt={article.alt} width="350" height="200" />
      <Text mt={16} mb={16} weight={600}>
        {article.title}
      </Text>
      <Text size="sm" color="dimmed">
        {article.description}
      </Text>
    </Card>
  ));

  return (
    <motion.div variants={works} initial="hidden" animate="visible">
      <div className="mb-10 mt-20">
        <Text className={cx(classes.chapter)} weight={600}>
          Works
        </Text>
      </div>
      <Container py="xl">
        <SimpleGrid
          className="sm:mx-6"
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
        >
          {cards}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
}

import { motion } from "framer-motion";
import Image from "next/image";
import { SimpleGrid, Card, Text, Container } from "@mantine/core";

import { useStyles } from "./layouts/style";

const data = [
  {
    title: "育児休業給付金　計算ツール",
    image: "/images/benefits.jpg",
    alt: "育児休業給付金　計算ツール",
    description:
      "育休中に働く場合の条件や給付される金額、お金のことにを中心にまとめています。",
    href: "https://paternity-leave.vercel.app/",
  },
  {
    title: "ウェブスクレイピング",
    image: "/images/webScraping.jpg",
    alt: "ウェブスクレイピング",
    description:
      "現職でエクセルに打ち込む業務があり、それを自動化したいと思い勉強しました。" +
      "web操作はseleniumで行いまいした。",
  },
];

export function Works() {
  const { classes, cx } = useStyles();

  const cards = data.map((article) => (
    <Card
      key={article.title}
      p="md"
      target="_blank"
      radius="lg"
      component="a"
      href={article.href}
      className={cx(classes.card)}
    >
      <Image src={article.image} alt={article.alt} width={340} height={200} />
      <Text mt={16} mb={16} weight={600}>
        {article.title}
      </Text>
      <Text size="sm" color="dimmed">
        {article.description}
      </Text>
    </Card>
  ));

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, delay: 1.1 },
    },
    hidden: { opacity: 0, y: 70 },
  };

  return (
    <motion.div variants={variants} initial="hidden" animate="visible">
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

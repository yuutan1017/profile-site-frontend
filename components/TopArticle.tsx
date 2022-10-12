import React from "react";
import Image from "next/image";
import { Text, Group } from "@mantine/core";

import { AnimatedText } from "./motion/AnimatedText";
import { useStyles } from "./layouts/style";


export const TopArticle = () => {
  const { classes, cx } = useStyles();
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center sm:text-3xl text-xl">
        <AnimatedText text="Welcome and thanks for" />
        <AnimatedText text="visiting my website!!" />
      </div>
      <div className="mt-20">
        <Group className="justify-center">
          <div className="">
            <Text weight={600} className={cx(classes.chapter)}>
              About
            </Text>
            <div className="mt-4">
              <Text size="sm">
                はじめまして。ユウタと申します。飲食店勤務5年目です。
              </Text>
              <Text size="sm">
                趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
              </Text>
              <Text size="sm">直近ではフロントエンドを中心に勉強中です。</Text>
            </div>
          </div>
          <div className="mt-8">
            <Image
              alt="topImage"
              src="/images/top.jpg"
              width={130}
              height={110}
              className="rounded-full"
            />
          </div>
        </Group>
      </div>
    </div>
  );
};

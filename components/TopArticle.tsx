import React from "react";
import { createStyles, Avatar, Text, Group } from "@mantine/core";
import { IconPhoneCall, IconAt } from "@tabler/icons";

import { AnimatedText } from "./motion/AnimatedText";

const useStyles = createStyles((theme) => ({
  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export const TopArticle = () => {
  const { classes } = useStyles();
  return (
    <div className="mt-12">
      <div className="flex items-center justify-center text-2xl">
        <AnimatedText text="Thankyou for Visiting!!" />
      </div>
      <div className="mt-10 mx-2">
        <Group>
          <Avatar src="/images/demo1.jpg" size={94} radius="md" />
          <div>
            <Text size="xl" weight={500} className={classes.name}>
              Yuta N
            </Text>
            <Text size="md" weight={500} className={classes.name}>
              はじめまして。ユウタと申します。飲食店勤務5年目です。
              趣味でプログラミングを始め、のめり込んでいくうちに仕事として携わっていきたいと思い、転職を決意。
              直近ではフロントエンドを中心に勉強中です。
            </Text>
          </div>
        </Group>
      </div>
    </div>
  );
};

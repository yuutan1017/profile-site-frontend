import { motion } from "framer-motion";
import { Center, Progress, Stack, Text, Tabs } from "@mantine/core";

import { useStyles } from "./layouts/style";
import type { SkillProps } from "../types/type";
import { skills } from "./motion/Motion";

const SkillBar = (props: SkillProps) => {
  return (
    <>
      <Text size="lg">{props.label}</Text>
      <Progress
        size="md"
        sections={[{ value: props.value, color: props.color }]}
        radius="sm"
      />
    </>
  );
};
const Remarks = ({ children }: any) => {
  return (
    <Center className="flex flex-col mt-14 sm:text-lg text-sm">
      <Text align="justify">{children}</Text>
    </Center>
  );
};

export const Skills = () => {
  const { classes, cx } = useStyles();
  return (
    <motion.section
      variants={skills}
      initial="hidden"
      animate="visible"
      className="mt-12"
    >
      <div className="mb-14">
        <Text className={cx(classes.chapter)} weight={600}>
          Skills
        </Text>
      </div>
      <Tabs
        defaultValue="FrontEnd"
        color="teal"
        sx={{ maxWidth: 700 }}
        mx="auto"
      >
        <Tabs.List className="justify-center space-x-5">
          <Tabs.Tab value="FrontEnd">FrontEnd</Tabs.Tab>
          <Tabs.Tab value="BackEnd">BackEnd</Tabs.Tab>
          <Tabs.Tab value="Others">Others</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="FrontEnd">
          <Stack className="mt-14" spacing="sm">
            <SkillBar label="HTML" value={75} color="#e44b23" />
            <SkillBar label="CSS" value={70} color="#563d7c" />
            <SkillBar label="JavaScript" value={72} color="#f1e05a" />
            <SkillBar label="TypeScript" value={72} color="#2b7489" />
          </Stack>
          <Remarks>
            HTML/CSSの基本的な使い方は理解しています。
            <br />
            Js/Tsでは調べながら簡易的なサイトは作成できます。
            <br />
            VueやNuxt.jsも少し知見はあります。
          </Remarks>
        </Tabs.Panel>

        <Tabs.Panel value="BackEnd">
          <Stack className="mt-14" spacing="sm">
            <SkillBar label="Python" value={70} color="#3572A5" />
            <SkillBar label="Java" value={65} color="#b07219" />
            <SkillBar label="PHP" value={55} color="#4F5D95" />
            <SkillBar label="Ruby" value={50} color="#701516" />
          </Stack>
          <Remarks>
            Pythonでseleniumを使ったウェブスクレイピングの経験や
            <br />
            Djangoでの簡易的なAPI作成の経験があります。
            <br />
            JavaやPHPは只今、勉強中です。
          </Remarks>
        </Tabs.Panel>

        <Tabs.Panel value="Others">
          <Stack className="mt-14" spacing="sm">
            <SkillBar label="AWS" value={60} color="#232f3e" />
            <SkillBar label="Git" value={70} color="#e84d31" />
            <SkillBar label="Linux" value={55} color="#ffe100" />
            <SkillBar label="Docker" value={60} color="#2496ed" />
          </Stack>
          <Remarks>
            Linux、Gitでの基本的なコマンド操作が可能です。
            <br />
            AWS、Dockerは只今、勉強中です。
          </Remarks>
        </Tabs.Panel>
      </Tabs>
    </motion.section>
  );
};

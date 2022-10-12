import React, { useRef } from "react";
import { Center, Progress, Stack, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

import { useStyles } from "./layouts/style";
import type { SkillProps } from "../types/type";

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

export const Skills = () => {
  const { classes, cx } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 6000 }));
  return (
    <div className="mt-12">
      <div className="mb-14">
        <Text className={cx(classes.chapter)} weight={600}>
          Skills
        </Text>
      </div>
      <Carousel
        sx={{ maxWidth: 622 }}
        mx="auto"
        slideGap="lg"
        loop
        withControls={false}
        height={370}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <Center>
            <Text size="xl" align="justify">
              Front End
            </Text>
          </Center>
          <Stack spacing="sm">
            <SkillBar label="HTML" value={75} color="#e44b23" />
            <SkillBar label="CSS" value={70} color="#563d7c" />
            <SkillBar label="JavaScript" value={72} color="#f1e05a" />
            <SkillBar label="TypeScript" value={72} color="#2b7489" />
          </Stack>
        </Carousel.Slide>

        <Carousel.Slide>
          <Center>
            <Text size="xl" align="justify">
              Back End
            </Text>
          </Center>
          <Stack spacing="sm">
            <SkillBar label="Java" value={65} color="#b07219" />
            <SkillBar label="Python" value={70} color="#3572A5" />
            <SkillBar label="PHP" value={55} color="#4F5D95" />
            <SkillBar label="Ruby" value={50} color="#701516" />
          </Stack>
        </Carousel.Slide>

        <Carousel.Slide>
          <Center>
            <Text size="xl" align="justify">
              DevOps
            </Text>
          </Center>
          <Stack spacing="sm">
            <SkillBar label="AWS" value={60} color="#232f3e" />
            <SkillBar label="Git" value={70} color="#e84d31" />

            <SkillBar label="Docker" value={60} color="#2496ed" />
          </Stack>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};

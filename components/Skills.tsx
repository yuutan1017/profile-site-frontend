import React from "react";
import { Progress, Text } from "@mantine/core";
import { SkillProps } from "../types/type";

const SkillBar = (props: SkillProps) => {
  return (
    <>
      <Text size="lg">{props.label}</Text>
      <Progress
        size="lg"
        sections={[{ value: props.value, color: props.color }]}
        radius="lg"
      />
    </>
  );
};

export const Skills = () => {
  return (
    <div className="mt-12">
      <div className="mb-8 text-2xl">
        <Text>|| skills</Text>
      </div>
      <div className="mt-4">
        <SkillBar label="JavaScript" value={72} color="#f1e05a" />
      </div>
      <div className="mt-4">
        <SkillBar label="TypeScript" value={72} color="#2b7489" />
      </div>
    </div>
  );
};

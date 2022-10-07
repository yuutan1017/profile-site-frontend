import React from "react";
import { Group } from "@mantine/core";
import { ModelApple_Yellow } from "../3D/ModelApple_yellow";
import { ModelApple_Blue } from "../3D/ModelApple_Blue";
import { ModelApple_Pink } from "../3D/ModelApple_Pink";

export const Material = () => {
  return (
    <Group spacing={30} className="flex flex-row justify-center">
      <ModelApple_Yellow />
      <ModelApple_Blue />
      <ModelApple_Pink />
    </Group>
  );
};

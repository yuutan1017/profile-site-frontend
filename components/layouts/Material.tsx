import React from "react";
import { Group } from "@mantine/core";
import { ModelApple_Yellow } from "../3D/ModelApple_yellow";
import { ModelApple_Blue } from "../3D/ModelApple_Blue";
import { ModelApple_Pink } from "../3D/ModelApple_Pink";
import { ModelApple_Rainbow } from "../3D/ModelApple.Rainbow";
import { ModelApple_Cyber } from "../3D/ModelApple_Cyber";

const Material = (): JSX.Element => {
  return (
    <Group spacing={30} className="flex flex-row justify-center">
      <ModelApple_Yellow />
      <ModelApple_Cyber />
      <ModelApple_Blue />
      <ModelApple_Pink />
      <ModelApple_Rainbow />
    </Group>
  );
};

export default Material;

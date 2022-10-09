import React from "react";
import { Group } from "@mantine/core";
import { Model_Yellow } from "./3D/Model_Yellow";
import { Model_Blue } from "./3D/Model_Blue";
import { Model_Pink } from "./3D/Model_Pink";
import { Model_Rainbow } from "./3D/Model_Rainbow";
import { Model_Cyber } from "./3D/Model_Cyber";

const Material = (): JSX.Element => {
  return (
    <Group className="flex flex-row justify-center">
      <Model_Yellow />
      <Model_Cyber />
      <Model_Blue />
      <Model_Pink />
      <Model_Rainbow />
    </Group>
  );
};

export default Material;

import { Group } from "@mantine/core";

import { Model_Yellow } from "./3D/Model_Yellow";
import { Model_Blue } from "./3D/Model_Blue";
import { Model_Pink } from "./3D/Model_Pink";
import { Model_Rainbow } from "./3D/Model_Rainbow";
import { Model_Cyber } from "./3D/Model_Cyber";

const materialArray = [
  <Model_Yellow />,
  <Model_Blue />,
  <Model_Pink />,
  <Model_Rainbow />,
  <Model_Cyber />,
];

const Material = (): JSX.Element => {
  const numArray = [0, 1, 2, 3, 4];

  for (let i = numArray.length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let tmpStorage = numArray[i];
    numArray[i] = numArray[random];
    numArray[random] = tmpStorage;
  }

  const material = numArray.map((i, idx) => (
    <div key={idx}>{materialArray[i]}</div>
  ));

  return <Group className="flex flex-row justify-center">{material}</Group>;
};

export default Material;

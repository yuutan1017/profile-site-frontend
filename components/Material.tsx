import { Group } from "@mantine/core";
import { memo } from "react";
import { motion } from "framer-motion";

import { Model_Yellow } from "./3D/Model_Yellow";
import { Model_Blue } from "./3D/Model_Blue";
import { Model_Pink } from "./3D/Model_Pink";
import { Model_Rainbow } from "./3D/Model_Rainbow";
import { Model_Cyber } from "./3D/Model_Cyber";

const materialArray = [
  <Model_Yellow key="0" />,
  <Model_Blue key="1" />,
  <Model_Pink key="2" />,
  <Model_Rainbow key="3" />,
  <Model_Cyber key="4" />,
];

const Material = memo((): JSX.Element => {
  const numArray = [0, 1, 2, 3, 4];

  for (let i = numArray.length - 1; i >= 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    let tmpStorage = numArray[i];
    numArray[i] = numArray[random];
    numArray[random] = tmpStorage;
  }

  const material = numArray.map((i, idx) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1.2, delay: 1, ease: "circIn" },
      }}
      key={idx}
    >
      {materialArray[i]}
    </motion.div>
  ));

  return <Group className="flex flex-row justify-center">{material}</Group>;
});

export default Material;

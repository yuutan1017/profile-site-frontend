import { Center, Text } from "@mantine/core";
import React, { memo } from "react";

export const Footer = memo(() => {
  return (
    <Center>
      <Text component="span" align="center" p={8} m={15}>
        &copy; {new Date().getFullYear()} Yuta N. All Rights Reserved.
      </Text>
    </Center>
  );
});

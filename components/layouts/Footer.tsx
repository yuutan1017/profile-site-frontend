import { Center, Text } from "@mantine/core";
import React from "react";

export const Footer = () => {
  return (
    <Center>
      <Text component="span" align="center" p={8} m={15}>
        &copy; {new Date().getFullYear()} Yuta N. All Rights Reserved.
      </Text>
    </Center>
  );
};


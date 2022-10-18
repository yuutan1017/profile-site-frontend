import {
  Switch,
  Group,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { BsMoon, BsSun } from "react-icons/bs";

export const ColorSchemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Group position="center" my={30}>
      <Switch
        checked={colorScheme === "dark"}
        onChange={() => toggleColorScheme()}
        size="lg"
        label
        onLabel={<BsSun color={theme.white} size={20} />}
        offLabel={<BsMoon color={theme.colors.gray[6]} size={20} />}
      />
    </Group>
  );
};

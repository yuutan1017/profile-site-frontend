import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { memo } from "react";

import type { HeaderResponsiveProps } from "../../types/type";
import { ColorSchemeToggle } from "../ColorSchemeToggle";

const HEADER_HEIGHT = 65;

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[2],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },
}));

export const HeaderResponsive = memo(({ links }: HeaderResponsiveProps) => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} passHref>
      <a className={cx(classes.link)}>
        {link.label}
      </a>
    </Link>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={100} className={classes.root}>
      <Container className={classes.header}>
        <Text size="xl">Yuta's Profile</Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <ColorSchemeToggle />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
});

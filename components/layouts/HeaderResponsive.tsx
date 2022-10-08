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

export const HeaderResponsive = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const LINK = () => {
    return (
      <>
        <Link href="/about" passHref>
          <a className={cx(classes.link)}>About</a>
        </Link>
        <Link href="/skills" passHref>
          <a className={cx(classes.link)}>Skills</a>
        </Link>
        <Link href="/works" passHref>
          <a className={cx(classes.link)}>Works</a>
        </Link>
        <Link href="https://github.com/yuutan1017/profile-site-remake" passHref>
          <a className={cx(classes.link)} target="_blank">
            Source
          </a>
        </Link>
      </>
    );
  };

  return (
    <Header height={HEADER_HEIGHT} mb={60} className={classes.root}>
      <Container className={classes.header}>
        <Text size="xl">Yuta&apos;s Profile</Text>
        <Group spacing={8} className={classes.links}>
          <LINK />
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
              <LINK />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

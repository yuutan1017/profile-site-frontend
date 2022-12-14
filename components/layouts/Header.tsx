import Link from "next/link";
import {
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { ColorSchemeToggle } from "./ColorSchemeToggle";
import { useStyles } from "../../styles/style";

export const _Header = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  const BurgerLink = () => {
    return (
      <>
        <Link href="/" passHref>
          <a
            className={cx(classes.link)}
            onClick={() => {
              close();
            }}
          >
            Top
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a
            className={cx(classes.link)}
            onClick={() => {
              close();
            }}
          >
            Contact
          </a>
        </Link>
        <Link href="https://github.com/yuutan1017/profile-site-remake" passHref>
          <a
            className={cx(classes.link)}
            onClick={() => {
              close();
            }}
            target="_blank"
          >
            Source
          </a>
        </Link>
      </>
    );
  };

  return (
    <Header height={65} mb={60} className={classes.root}>
      <Container className={classes.header}>
        <Text size="xl">Yuta&apos;s Profile</Text>
        <Group spacing={8} className={classes.links}>
          <BurgerLink />
        </Group>
        <Burger
          id="burger"
          role="button"
          aria-label="burger"
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
        <ColorSchemeToggle />
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <BurgerLink />
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

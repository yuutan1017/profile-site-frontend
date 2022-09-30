import type { NextPage } from "next";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  const mainlinks = [
    {
      "link": "#",
      "label": "Book a demo"
    },
    {
      "link": "#",
      "label": "Documentation"
    },
    {
      "link": "#",
      "label": "Community"
    },
    {
      "link": "#",
      "label": "Academy"
    },
    {
      "link": "#",
      "label": "Forums"
    }
  ]
  const userlinks = [
      {
        "link": "#",
        "label": "Privacy & Security"
      },
      {
        "link": "#",
        "label": "Account settings"
      },
      {
        "link": "#",
        "label": "Support options"
      }
  ]
  return (
    <>
      <Navbar mainLinks={mainlinks} userLinks={userlinks} />
    </>
  );
};

export default Home;

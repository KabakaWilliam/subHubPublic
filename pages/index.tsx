import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import LoggedInView from "../components/LoggedInView";
import Navbar from "../components/Navbar";
import NormalView from "../components/NormalView";
import SoftwareContainer from "../components/SoftwareContainer";
import SoftwareContainerMobile from "../components/SoftwareContainerMobile";
import { UserContext } from "../lib/context";

export const getStaticProps: GetStaticProps = async (context) => {
  //   const { data } = context.params;

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const { loggedInUser, loggedInUsername } = useContext(UserContext);
  console.log("loggedInUser", loggedInUser);
  return (
    <div className={`z-50`}>
      <Head>
        <title>Subhub | track your subscriptions</title>
        <meta
          name="description"
          content="Ahoy! Share and manage your subscriptions with your friends.  No more surpise billings "
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐳</text></svg>"
        />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Subhub | track your subscriptions"
        />
        <meta
          name="twitter:description"
          content="Ahoy! Share and manage your subscriptions with your friends. No more surpise billings."
        />
        <meta name="twitter:image" content="/tweetCard.png" />

        <meta property="og:title" content="Subhub | track your subscriptions" />
        <meta
          property="og:description"
          content="Ahoy! Share and manage your subscriptions with your friends. No more surpise billings."
        />
        <meta property="og:image" content="/bgTwitter.png" />
        <meta property="og:url" content="https://subhub.app" />
      </Head>
      {!loggedInUser ? <NormalView /> : <LoggedInView />}
    </div>
  );
};

export default Home;

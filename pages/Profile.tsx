import { Tabs } from "flowbite-react";
import {
  AdjustmentsIcon,
  ColorSwatchIcon,
  CreditCardIcon,
  // UserCircleIcon,
} from "@heroicons/react/outline";
import SubscriptionContainer from "../components/SubscriptionContainer";
import Head from "next/head";
const Profile = () => {
  return (
    <div className="md:w-[60vw] md:mx-[20vw] h-max md:h-[90vh] overflow-hidden">
      <Head>
        <title>Subhub | track your subscriptions</title>
        <meta
          name="description"
          content="Share and manage your subscriptions with your friends.  No more surpise billings!"
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
          content="Share and manage your subscriptions with your friends. No more surpise billings!"
        />
        <meta name="twitter:image" content="/bgTwitter.png" />

        <meta property="og:title" content="Subhub | track your subscriptions" />
        <meta
          property="og:description"
          content="Share and manage your subscriptions with your friends. No more surpise billings!"
        />
        <meta property="og:image" content="/apex.png" />
        <meta property="og:url" content="https://subhub.app" />
      </Head>
      <Tabs.Group className="" aria-label="Tabs with icons" style="underline">
        <Tabs.Item active={true} title="Subscriptions" icon={ColorSwatchIcon}>
          <div className=" w-[100%] h-[5vh] flex items-start justify-center md:justify-start gap-x-3 md:pb-5 md:pl-5 text-sm md:text-sm text-[#d1d5db]">
            <div className="cursor-pointer rounded-lg hover:underline">
              All{" "}
            </div>
            <div className="cursor-pointer rounded-lg hover:underline">
              Shared{" "}
            </div>
            <div className="cursor-pointer rounded-lg hover:underline">
              Private
            </div>
          </div>
          <SubscriptionContainer />
        </Tabs.Item>
        <Tabs.Item title="Wallet" icon={CreditCardIcon}>
          {/* Settings content */}
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={AdjustmentsIcon}></Tabs.Item>
      </Tabs.Group>
    </div>
  );
};

export default Profile;

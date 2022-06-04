import React from "react";
import AddSubscriptionButton from "./AddSubscriptionButton";
import SubCard from "./SubCard";

const SubscriptionContainer = () => {
  return (
    <div className="w-[100%]  h-[80vh]  md:h-[90vh]  overflow-x-hidden ">
      <div className=" flex md:w-[60vw] flex-col md:grid md:grid-cols-3 px-5 pt-5 pb-[200px] overflow-y-auto md:items-start items-center gap-y-5 md:gap-y-5  ">
        <SubCard image="/netflix.png" />
        <SubCard image="/premierePro.png" />
        <SubCard image="/slack.png" />
        <SubCard image="/netflix.png" />
        <SubCard image="/premierePro.png" />
        <SubCard image="/slack.png" />
        <SubCard image="/netflix.png" />
        <SubCard image="/premierePro.png" />
        <SubCard image="/slack.png" />
        <SubCard image="/netflix.png" />
        <SubCard image="/premierePro.png" />
        <SubCard image="/slack.png" />
      </div>
      <AddSubscriptionButton />
    </div>
  );
};

export default SubscriptionContainer;

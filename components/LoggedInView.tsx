import Image from "next/image";
import { useContext, useState } from "react";
import { UserContext } from "../lib/context";
import FormComponent from "./FormComponent";
import Navbar from "./Navbar";
import SoftwareContainerLogged from "./SoftwareContainerLogged";

const LoggedInView = () => {
  const { loggedInUser } = useContext(UserContext);
  const [selectedSoftware, setSelectedSoftware] = useState("");

  return (
    <>
      <div className="w-[60vw] h-[90vh] mx-[20vw] flex flex-col md:flex-row ">
        <div className="md:w-[50%] h-[40%] md:h-[100%]  flex flex-col items-start">
          <div className="text-white text-3xl h-[25%] md:text-6xl md:w-[100%]   md:h-[10%] truncate">
            Hey{" "}
            <span className="textGradientVariant animate-gradient-xy">
              {loggedInUser?.displayName}
            </span>
            ,
          </div>

          <div className="text-purple-300 text-lg md:text-2xl font-thin md:mt-10">
            We'll be launching soon, but let us know what software you and your
            friends want to share the most
          </div>
          <div className="text-purple-300 md:text-2xl font-thin mt-10">
            - <i>Ciao</i>
          </div>
        </div>
        <div className="w-[100%] h-[60%]  md:w-[50%] md:h-[100%] flex flex-col items-center ">
          <SoftwareContainerLogged />
          <FormComponent
            selectedSoftware={selectedSoftware}
            setSelectedSoftware={setSelectedSoftware}
            loggedInUser={loggedInUser}
          />
        </div>
      </div>
    </>
  );
};

export default LoggedInView;

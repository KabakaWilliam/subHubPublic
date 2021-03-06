import EarlyAccessButton from "./EarlyAccessButton";
import Navbar from "./Navbar";
import SoftwareContainer from "./SoftwareContainer";
import SoftwareContainerMobile from "./SoftwareContainerMobile";

const NormalView = () => {
  return (
    <>
      <div className="mx-[20vw]">
        <div className=" h-[30vh] md:h-[40vh] w-[60vw]   flex flex-col items-center  justify-center  font-extrabold text-white text-5xl md:text-8xl ">
          <span className="textGradientWelcome animate-gradient-xy">Share</span>
          <span className="textGradientWelcome animate-gradient-xy-fast">
            your
          </span>
          <span className="textGradientWelcome animate-gradient-xy-faster">
            subscriptions
          </span>
        </div>
        <div className=" hidden md:block">
          <SoftwareContainer />
        </div>
        <div className="md:hidden overflow-hidden">
          <SoftwareContainerMobile />
        </div>

        <div className="text-white w-[60vw] text-xl md:text-4xl font-thin flex items-center justify-center pt-10  text-center  ">
          <p>
            Split <span className="font-bold text-[#8df58d] ">costs</span>.
            <span className=""> Manage</span>{" "}
            <span className="font-bold text-orange-300 ">passwords.</span>
            <span className=""> Track</span>{" "}
            <span className="text-purple-300 font-bold"> subscriptions</span>{" "}
          </p>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-0 md:flex-row justify-center items-center h-[20vh]">
          <EarlyAccessButton />
          <div className="text-white md:hidden text-sm">
            ✨PS: use your <span className="font-bold">default</span> browser✨
          </div>
        </div>
      </div>
      <div className="z-0  w-screen absolute bottom-0  ">
        {/* <Image🔎
      src={"/lines.png"}
      width={300}
      height={100}
      layout="responsive"
      className="object-contain relative"
    /> */}
        <img
          src="/lines.png"
          alt=""
          className="w-screen md:w-[80vw] md:mx-[10vw] h-[100%] md:h-[20vh] object-cover md:opacity-[0.3] z-0"
        />
      </div>
    </>
  );
};

export default NormalView;

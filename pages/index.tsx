import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import SoftwareContainer from "../components/SoftwareContainer";
import SoftwareContainerMobile from "../components/SoftwareContainerMobile";

export const getStaticProps: GetStaticProps = async (context) => {
  //   const { data } = context.params;

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return (
    <div className={`z-50`}>
      <Head>
        <title>Subhub</title>
        <meta
          name="description"
          content="Ahoy! Share and manage your subscriptions with your friends.  Help us democratize software "
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐳</text></svg>"
        />
      </Head>
      <Navbar />
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
            Split <span className="font-bold text-purple-300 ">costs</span>.
            <span className="font-bold text-orange-300 "> Manage</span>{" "}
            subscriptions.{" "}
            <span className="text-[#f5e58d] underline">Repeat</span>
          </p>
        </div>
        <div className="flex justify-center items-center h-[20vh]">
          <button className="z-50 w-[150px] h-[80px] md:w-[200px] md:h-[100px] border-[2px] border-[#cf0fcf99] hover:bg-[#cf0fcf99] hover:border-black rounded-2xl text-white text-lg">
            Get Early Access
          </button>
        </div>
      </div>
      <div className="z-0  w-screen absolute bottom-0  ">
        {/* <Image
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
    </div>
  );
};

export default Home;

import Image from "next/image";

const SoftwareContainerMobile = () => {
  return (
    <div className="overflow-y-hidden ">
      <div className="h-[100px] w-max gap-x-1 flex items-center justify-center  cursor-pointer   overflow-x-auto">
        <Image
          src={"/premierePro.png"}
          width={80}
          height={80}
          className="z-50 hover:animate-pulse"
        />
        <Image
          src={"/netflix.png"}
          width={80}
          height={80}
          className="z-50 bg-transparent object-contain hover:animate-pulse"
        />
        <Image
          src={"/spotify.png"}
          width={80}
          height={80}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
        <Image
          src={"/gcp.png"}
          width={130}
          height={80}
          className="z-50 bg-transparent hover:animate-pulse"
        />
        <Image
          src={"/photoshop.png"}
          width={80}
          height={80}
          className="z-50 bg-transparent hover:animate-pulse"
        />
        <Image
          src={"/canva.png"}
          width={80}
          height={80}
          className="z-50 bg-transparent hover:animate-pulse"
        />
        <Image
          src={"/skillShare.png"}
          width={80}
          height={80}
          className="z-50 bg-transparent hover:animate-pulse"
        />
        <Image
          src={"/figma.png"}
          width={80}
          height={80}
          className="z-50 bg-transparent hover:animate-pulse object-contain"
        />
      </div>
    </div>
  );
};

export default SoftwareContainerMobile;

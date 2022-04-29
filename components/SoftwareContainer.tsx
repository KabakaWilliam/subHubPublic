import Image from "next/image";

const SoftwareContainer = () => {
  return (
    <div className=" w-[60vw] h-[10vh] flex items-center justify-center gap-x-3 cursor-pointer overflow-auto">
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
  );
};

export default SoftwareContainer;

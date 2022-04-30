import { EarlyAccessFunction } from "../lib/loginFunctions";
const EarlyAccessButton = () => {
  return (
    <button
      onClick={() => {
        EarlyAccessFunction();
      }}
      className="z-50 w-[150px] h-[80px] md:w-[200px] md:h-[100px] border-[2px] border-[#cf0fcf99] hover:bg-[#cf0fcf99] hover:border-black rounded-2xl text-white text-lg"
    >
      Get Early Access
    </button>
  );
};

export default EarlyAccessButton;

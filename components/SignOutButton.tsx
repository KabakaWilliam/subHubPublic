import { User } from "firebase/auth";
import { signOutFunction } from "../lib/loginFunctions";

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOutFunction()}
      className="w-[120px] md:w-[100px] h-[60px] cursor-pointer  rounded-lg bg-[#cf0fcf99] text-white font-bold text-[16px]  md:text-lg"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;

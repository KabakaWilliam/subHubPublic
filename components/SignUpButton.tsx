import { signUpFunction } from "../lib/loginFunctions";

const SignUpButton = () => {
  return (
    <button
      onClick={() => {
        signUpFunction();
      }}
      className="w-[120px] md:w-[100px] h-[60px] rounded-lg bg-[#cf0fcf99] text-white font-bold text-[16px]  md:text-lg"
    >
      Sign Up
    </button>
  );
};

export default SignUpButton;

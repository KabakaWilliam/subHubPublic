import { signInFunction } from "../lib/loginFunctions";

const SignInButton = () => {
  return (
    <button
      onClick={() => signInFunction()}
      className="w-[120px] md:w-[100px] h-[60px] rounded-lg bg-[#9e949e99] text-white text-[16px] md:text-lg"
    >
      Sign In
    </button>
  );
};

export default SignInButton;

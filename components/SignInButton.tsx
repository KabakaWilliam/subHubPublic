import { signInFunction } from "../lib/loginFunctions";

const SignInButton = () => {
  return (
    <button
      onClick={() => signInFunction()}
      className="w-[120px] md:w-[100px] h-[60px] rounded-lg hover:bg-[#2d2b2d99] bg-[#19181999] text-white text-[16px] md:text-lg"
    >
      Sign In
    </button>
  );
};

export default SignInButton;

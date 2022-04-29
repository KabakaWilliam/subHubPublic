import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

const Navbar = () => {
  return (
    <div className="w-[100vw] md:w-[60vw] h-[10vh] flex md:mx-[20vw] py-2 text-white gap-x-5 justify-end px-5 md:px-0  ">
      <div className="w-[80%] h-[100%] flex justify-start items-center  font-bold ">
        <span className="text-2xl md:text-4xl">🐳 Subhub</span>
      </div>
      <SignInButton />
      <SignUpButton />
    </div>
  );
};

export default Navbar;

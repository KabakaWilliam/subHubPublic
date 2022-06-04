import { PlusIcon } from "@heroicons/react/outline";

const AddSubscriptionButton = () => {
  return (
    <div className="fixed bottom-[-40px] md:bottom-[-3px] right-[-20px] md:right-[30px] w-[200px] h-[200px] flex justify-center items-center z-50  ">
      <button
        //   onClick={() => addProject()}
        className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] bg-[#7C0C7C] rounded-[100%] shadow-lg shadow-[#2b2d2d] hover:bg-[#d6d5c7] "
      >
        <PlusIcon className="stroke-1 text-white" />
      </button>
    </div>
  );
};

export default AddSubscriptionButton;

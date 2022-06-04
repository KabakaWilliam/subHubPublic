import { Tooltip } from "flowbite-react";
import { useEffect, useState } from "react";
import SharerContainer from "./SharerContainer";

interface props {
  image: string;
}
// image="/netflix.png" />
// image="/premierePro.png" />
// image="/slack.png" />
const SubCard = ({ image }: props) => {
  const [CardColor, setCardColor] = useState("");
  console.log(CardColor);
  useEffect(() => {
    if (image === "/netflix.png") {
      setCardColor("#e32929dd");
    } else if (image === "/premierePro.png") {
      setCardColor("#312e9b");
    } else setCardColor("white");
  });
  return (
    <Tooltip content={image.slice(1, image.lastIndexOf(".png"))}>
      <div
        style={{ backgroundColor: CardColor }}
        className={`w-[300px] h-[200px] hover:shadow-xl hover:shadow-[#7C0C7C]  rounded-lg shadow shadow-[#191919] cursor-pointer p-2`}
      >
        <div className="w-[100%] h-[40%]  flex items-center ">
          <div className=" rounded-full  w-[50px] h-[50px] ">
            <img
              src={image}
              alt=""
              className="w-[100%] h-[100%] object-cover shadow rounded-lg "
            />
          </div>
          <SharerContainer />
        </div>
        <div className="w-[100%] h-[60%] gap-y-3 flex flex-col justify-center text-lg">
          <div className="font-medium ">
            Next Payment 🗓️: <span className="font-bold">13/03/2022</span>{" "}
          </div>
          <div className="font-medium ">
            Total Spent 💰: <span className="font-bold">$60 </span>{" "}
          </div>
        </div>
      </div>
    </Tooltip>
  );
};

export default SubCard;

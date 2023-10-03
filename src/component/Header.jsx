import React from "react";
import image from "../images/name.png";
import BottomSide from "./BottomSide";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

function Header() {
  // const [theme , setTheme] = useTheme()
  return (
    <div>
      <div className="flex  flex-col pt-8 pl-3.5 pr-8">
        {/* top side */}

        <div className="">
          <img
            src={image}
            alt="instagram"
            className="hidden xl:block  w-[6.7rem]"
          />
        </div>

        {/* bottom side */}

        <div className="w-full pt-[2rem]">
          <BottomSide />
        </div>
      </div>
    </div>
  );
}

export default Header;

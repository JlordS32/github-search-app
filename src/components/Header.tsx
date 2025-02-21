import React from "react";

const Header = () => {
   return (
      <nav className="flex justify-between items-center mb-[1.7rem]">
         <div className="text-header-light text-[26px] font-bold">
            devfinder
         </div>
         <div className="flex-center gap-x-[1.1rem] cursor-pointer">
            <h4 className="uppercase tracking-[0.16667rem] font-bold">Dark </h4>
            <img src="images/moon.svg" alt="Toggle Dark Mode" />
         </div>
      </nav>
   );
};

export default Header;

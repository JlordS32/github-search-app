import React from "react";

const Header = () => {
   return (
      <nav className="flex justify-between items-center mb-[1.7rem]">
         <div className="text-header-light text-[26px] font-bold">
            devfinder
         </div>
         <div>
            <img src="images/moon.svg" alt="Toggle Dark Mode" />
         </div>
      </nav>
   );
};

export default Header;

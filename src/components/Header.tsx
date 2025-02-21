import { useState } from "react";

const Header = () => {
   const [darkMode, setDarkMode] = useState<boolean>(false);

   const toggleDarkMode = () => {
      document.documentElement.classList.toggle("dark");
      setDarkMode(!darkMode);
   };

   return (
      <nav className="flex justify-between items-center mb-[1.7rem]">
         <div className="text-header-light dark:text-header-dark text-[26px] font-bold">
            devfinder
         </div>
         <div
            className="flex-center gap-x-[1.1rem] cursor-pointer"
            onClick={toggleDarkMode}
         >
            {darkMode ? (
               <>
                  <h4 className="uppercase tracking-[0.16667rem] font-bold">
                     Light{" "}
                  </h4>
                  <img src="images/sun.svg" alt="Toggle Light Mode" />
               </>
            ) : (
               <>
                  <h4 className="uppercase tracking-[0.16667rem] font-bold">
                     Dark{" "}
                  </h4>
                  <img src="images/moon.svg" alt="Toggle Dark Mode" />
               </>
            )}
         </div>
      </nav>
   );
};

export default Header;

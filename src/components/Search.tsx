import { useRef } from "react";

type SearchProps = {
   handleClick: (value: string) => void;
};

const Search = ({ handleClick }: SearchProps) => {
   const ref = useRef<HTMLInputElement>(null);

   return (
      <div className="search-bar">
         <div>
            <img src="images/search-icon.png" alt="Search Icon" />
         </div>
         <input
            className="flex-1"
            ref={ref}
            type="text"
            placeholder="Search Github username..."
         />
         <button
            className="bg-accent text-white py-[0.5rem] px-[1rem] rounded-[0.5rem] justify-self-end hover:bg-[#60ABFF]"
            onClick={() => handleClick(ref.current!.value)}
         >
            Search
         </button>
      </div>
   );
};

export default Search;

import { useRef } from "react";

type SearchProps = {
   handleClick: (value: string) => void;
};

const Search = ({ handleClick }: SearchProps) => {
   const ref = useRef<HTMLInputElement>(null);

   return (
      <div className="flex bg-white">
         <div>
            <img src="images/search-icon.png" alt="Search Icon" />
         </div>
         <input ref={ref} type="text" placeholder="Search Github username..." />
         <button
            className="bg-blue-500 text-white px-2 py-1 rounded self-end"
            onClick={() => handleClick(ref.current!.value)}
         >
            Search
         </button>
      </div>
   );
};

export default Search;

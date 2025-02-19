import { useEffect, useState } from "react";
import { fetchGithubUser } from "./utility/fetchData";
import Search from "./components/Search";

const App = () => {
   const [data, setData] = useState<any>();
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const handleSearch = (input: string) => {
      setIsLoading(true);

      setTimeout(() => {
         fetchGithubUser(input)
            .then((data) => {
               setData(data);
               setIsLoading(false);
            })
            .catch((error) => {
               console.log(error);
               setIsLoading(false);
            });
      }, 3000);
   };

   useEffect(() => {
      console.log(data);
   }, [data]);

   return (
      <main>
         <Search handleClick={handleSearch} />

         {isLoading ? (
            <p>Loading...</p>
         ) : (
            data && (
               <div className="flex flex-row">
                  <div className="w-[120px] h-[120px] overflow-hidden rounded-full">
                     <img
                        className="w-full h-full"
                        src={data.avatar_url}
                        alt=""
                     />
                  </div>
                  <div>
                     <p>{data.name}</p>
                     <p>{data.location}</p>
                     <p>{data.bio ?? "This profile has no bio"}</p>
                  </div>
               </div>
            )
         )}
      </main>
   );
};

export default App;

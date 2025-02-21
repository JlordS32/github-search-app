import { useEffect, useState } from "react";
import { fetchGithubUser } from "./utility/fetchData";
import Search from "./components/Search";
import Header from "./components/Header";
import Card from "./components/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   const [data, setData] = useState<any>();
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const [currInput, setCurrInput] = useState<string>("");

   const notify = () =>
      toast.error("User not found!", {
         position: "top-center",
         autoClose: 5000,
      });

   const handleSearch = (input: string) => {
      if (!input || input === "" || input === currInput) return;

      setIsLoading(true);
      setCurrInput(input);

      fetchGithubUser(input)
         .then((data) => {
            setData(data);
            setIsLoading(false);
         })
         .catch((error) => {
            notify();
            console.log(error);
            setIsLoading(false);
         });
   };

   useEffect(() => {
      console.log(data);
   }, [data]);

   return (
      <main className="w-[730px] h-screen mx-auto">
         <div className="w-full mt-[10rem]">
            <ToastContainer />
            <Header />
            <Search handleClick={handleSearch} />
            {isLoading ? <p>Loading...</p> : data && <Card data={data} />}
         </div>
      </main>
   );
};

export default App;

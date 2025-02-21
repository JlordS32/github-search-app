import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBuilding,
   faLink,
   faLocationDot,
   faX,
} from "@fortawesome/free-solid-svg-icons";

type CardProps = {
   data: any;
};

const Card = ({ data }: CardProps) => {
   const formattedDate = new Date(data.created_at).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
   });

   return (
      <div className="card">
         <div className="w-[117px] h-[117px] max-sm:w-[70px] max-sm:h-[70px] overflow-hidden rounded-full col-span-1 row-span-2 justify-self-start max-lg:row-span-2 max-lg:self-center">
            <img className="w-full h-full" src={data.avatar_url} alt="" />
         </div>
         <div className="col-span-2 max-lg:col-span-4 max-lg:self-end max-lg:pl-[2rem]">
            <h1>{data.name}</h1>
            <p className="text-accent dark:text-accent mt-1">
               &#64;
               {data.login}
            </p>
         </div>
         <div className="text-toggle-light opacity-85 col-span-2 justify-self-end max-lg:col-span-4 max-lg:justify-self-start max-lg:pl-[2rem]">
            <p>Joined {formattedDate}</p>
         </div>
         <div className="opacity-85 col-start-2 col-span-4 self-center max-lg:col-span-full max-lg:self-start max-lg:mt-[1.5rem] mt-2">
            <p>{data.bio ?? "This profile has no bio"}</p>
         </div>
         <div className="bg-background-light dark:bg-background-dark mt-[1.5rem] mb-[1.5rem] py-[1rem] px-[2.3rem] rounded-[0.67rem] col-start-2 col-span-4 flex justify-between max-lg:col-span-full">
            <div>
               <h4>Repos</h4>
               <h2>{data.public_repos}</h2>
            </div>
            <div>
               <h4>Followers</h4>
               <h2>{data.followers}</h2>
            </div>
            <div>
               <h4>Following</h4>
               <h2>{data.following}</h2>
            </div>
         </div>
         <div className="grid grid-cols-2 grid-rows-2 gap-y-[1.2rem] gap-x-[4rem] text-light col-start-2 col-span-4 self-center max-lg:col-span-full max-sm:grid-cols-1 max-sm:gap-0 max-sm:gap-y-[0.5rem]">
            <div className={`info ${data.location ? "" : "half-opacity"}`}>
               <FontAwesomeIcon icon={faLocationDot} />
               <p>{data.location ?? "Not available"}</p>
            </div>
            <div
               className={`info ${data.twitter_username ? "" : "half-opacity"}`}
            >
               <FontAwesomeIcon icon={faX} />
               <p>{data.twitter_username ?? "Not available"}</p>
            </div>
            <div className={`info ${data.blog ? "" : "half-opacity"}`}>
               <FontAwesomeIcon icon={faLink} />
               {data.blog ? (
                  <a
                     href={data.blog}
                     target="_blank"
                     rel="noreferrer"
                     className="hover:underline"
                  >
                     {data.blog}
                  </a>
               ) : (
                  <p>Not available</p>
               )}
            </div>
            <div className={`info ${data.company ? "" : "half-opacity"}`}>
               <FontAwesomeIcon icon={faBuilding} />
               <p>{data.company ?? "Not available"}</p>
            </div>
         </div>
      </div>
   );
};

export default Card;

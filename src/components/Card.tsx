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
         <div className="w-[117px] h-[117px] overflow-hidden rounded-full col-span-1 row-span-full justify-self-start">
            <img className="w-full h-full" src={data.avatar_url} alt="" />
         </div>
         <div className="col-span-2">
            <h1>{data.name}</h1>
            <p className="text-accent dark:text-accent">
               &#64;
               {data.login}
            </p>
         </div>
         <div className="text-toggle-light mt-3 opacity-85 col-span-1 justify-self-end">
            <p>Joined {formattedDate}</p>
         </div>
         <div className="my-[1.3rem] opacity-85 col-span-3 self-center pt-[1rem]">
            {/* <p>{data.bio ?? "This profile has no bio"}</p> */}
            <p>
               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
               odio. Quisque volutpat mattis eros.
            </p>
         </div>
         <div className="bg-background-light dark:bg-background-dark py-[1rem] px-[2.3rem] rounded-[0.67rem] col-span-3 flex justify-between">
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
         <div className="grid grid-cols-2 grid-rows-2 gap-y-[1.2rem] gap-x-[4rem] text-light col-span-3 self-center pt-[1rem]">
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

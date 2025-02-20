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
   return (
      <div className="flex flex-row">
         <div className="w-[120px] h-[120px] overflow-hidden rounded-full">
            <img className="w-full h-full" src={data.avatar_url} alt="" />
         </div>
         <div>
            <div>
               <p>{data.name}</p>
               <p>{data.location}</p>
            </div>
            <div>
               <p>{data.createdAt}</p>
            </div>
            <div>
               <p>{data.bio ?? "This profile has no bio"}</p>
            </div>
            <div>
               <div>
                  <p>Repos</p>
                  <p>{data.public_repos}</p>
               </div>
               <div>
                  <p>Followers</p>
                  <p>{data.followers}</p>
               </div>
               <div>
                  <p>Following</p>
                  <p>{data.following}</p>
               </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
               <div className="location">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{data.location ?? "Not available"}</p>
               </div>
               <div className="tweeter">
                  <FontAwesomeIcon icon={faX} />
                  <p>{data.twitter_username ?? "Not available"}</p>
               </div>
               <div className="blog-link">
                  <FontAwesomeIcon icon={faLink} />
                  {data.blog ?? "Not available"}
               </div>
               <div className="company">
                  <FontAwesomeIcon icon={faBuilding} />
                  {data.company ?? "Not available"}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;

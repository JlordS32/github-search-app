export const fetchGithubUser = async (username: string): Promise<any> => {
   const endpoint = `https://api.github.com/users/${username}`;

   try {
      const res: Response = await fetch(endpoint);

      if (!res.ok) {
         throw new Error(`Error: ${res.status} ${res.statusText}`);
      }

      return await res.json();
   } catch (error) {
      throw new Error(`Failed to fetch user: ${error}`);
   }

};
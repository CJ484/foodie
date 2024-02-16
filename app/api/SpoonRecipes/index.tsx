import axios from "axios";

// ? Get Spoon Recipes
// * Api call is inputted with the searchInput that corresponds to the recipe
// * The response will give all information that Spooncular API has on the recipe
// * Which includes the title, image, and id of the recipe. 

// ? The Api has a list of different parameters that can be used to filter the search
// ? For this Component, we are using the Complex Search parameter, which will return an object
// ? with the following properties: 
// * - id: number
// * - title: string
// * - image: string
// ? We can change the amount of results, the offset, and the query.
const SpoonRecipes = ({incomingData, resultOffset}: {incomingData: any, resultOffset: number}) => {
  const searchInput = incomingData;
  const pageOffset = resultOffset || 0;
  const expectedResults = 12;
  const spooncularApi = process.env.NEXT_PUBLIC_API_URL;
  const spooncularApiAuth = process.env.NEXT_PUBLIC_API_SPOONCULAR_KEY;

  return axios.get(
    `${spooncularApi}/recipes/complexSearch?query=${searchInput}&offset=${pageOffset}&number=${expectedResults}&apiKey=${spooncularApiAuth}`
  );
};

export default SpoonRecipes;

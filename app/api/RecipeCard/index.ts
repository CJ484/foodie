import axios from "axios";

// ? Get Recipe Card
// * Api call is inputted with the 'recipeId' as a parameter that corresponds to the recipe
// * on the Spoonacular API. it will then contruct the API endpoint URL.
// *  The response will be a an img url STRING that will get
// * passed to the RecipeCard component. The Image will be displayed as a model card
const RecipeCardApi = ({ recipeId }: { recipeId: number }) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const authorization = process.env.NEXT_PUBLIC_API_SPOONCULAR_KEY;
  return axios.get(`${apiUrl}/recipes/${recipeId}/card?apiKey=${authorization}`);
};

export default RecipeCardApi;

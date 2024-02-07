import axios from "axios";
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

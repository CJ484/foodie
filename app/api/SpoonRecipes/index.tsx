import axios from "axios";
const SpoonRecipes = async (incomingData: any) => {
  const data = incomingData.map(async (data: any) => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/recipes/${data.id}/information?apiKey=${process.env.SPOONACULAR_API_KEY}`;
    return await axios.get(apiUrl);
  });

  return Promise.all(data);

  // ? The bottom return is what needs to be used to get the data from the api

  // .then((results) => {
  //   const keyId = 44455;
  //   const eachIdFav = {
  //     title: results.data.title,
  //     img: results.data.image,
  //     id: results.data.id,
  //     key: keyId,
  //   };
  // });
};

export default SpoonRecipes;

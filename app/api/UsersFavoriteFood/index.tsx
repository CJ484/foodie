import SpoonRecipes from "../SpoonRecipes";
const UsersFavoriteFood = async ({data}: {data: any}) => {
  return await Promise.all(
    data.map((recipeId: string) =>
      SpoonRecipes({ incomingData: recipeId, resultOffset: 0 })
    )
  ).then((response) => {
    const foodData = response.map((food: any) => {
      const { id, title, image } = food.data.results[0];
      return { id, title, image };
    });

    return foodData;
  });
};

export default UsersFavoriteFood;
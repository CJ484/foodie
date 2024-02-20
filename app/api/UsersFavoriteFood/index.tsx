import axios from "axios";
const UsersFavoriteFood = async ({data}: {data: any}) => {
  const apiKey = process.env.NEXT_PUBLIC_API_SPOONCULAR_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  return await Promise.all(
    data.map((recipeId: string) =>
      axios.get(`${apiUrl}/recipes/${recipeId}/information?apiKey=${apiKey}`)
    )
  ).then((response) => {
    const foodData = response.map((food: any) => {
      const { id, title, image } = food.data;
      return { id, title, image };
    });

    return foodData;
  });
};

export default UsersFavoriteFood;
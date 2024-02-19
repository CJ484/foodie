"use client";
import React, { useEffect, useState } from "react";
import { FoodCard, Nav, RecipeModal } from "../../Component";
import UsersFavoriteFood from "../../api/UsersFavoriteFood";
import styles from "../../assets/styles/pages/myList.module.scss";

const MyList = () => {
  const sampleFavoriteRecipes = [
    "chicken suya",
    "lamb chop fry",
    "Broccoli Cheese Soup",
    "thai fish cakes",
  ];

  const [foods, setFoods] = useState([] as any);
  const [modalOpen, setModalOpen] = useState(false);


  const getFavoriteRecipes = async () => {
    const favoriteRecipes = await UsersFavoriteFood({data: sampleFavoriteRecipes});
    setFoods(favoriteRecipes);
  };
  
  useEffect(() => {
    getFavoriteRecipes();
  }, []);

  return (
    <div className={styles.myListPage}>
      <Nav />
      <h1 className={styles.myListPage_title}>My List</h1>
      <div className={styles.myListPage_recipes}>
        {foods.map((food: any, index: number) => {
          return (
            <>
              <FoodCard setModalOpen={setModalOpen} key={index} data={food} />
            </>
          );
        })}
      </div>
      <RecipeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

    </div>
  );
};

export default MyList;

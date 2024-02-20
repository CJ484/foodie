"use client";
import React, { useEffect, useState } from "react";
import { FoodCard, Nav, RecipeModal } from "../../Component";
import UsersFavoriteFood from "../../api/UsersFavoriteFood";
import styles from "../../assets/styles/pages/myList.module.scss";
import SkeletonCard from "../../Component/UI/SkeletonCard";

const MyList = () => {
  const sampleFavoriteRecipes = [
    "chicken suya",
    "lamb chop fry",
    "Broccoli Cheese Soup",
    "thai fish cakes",
  ];

  const [foods, setFoods] = useState([] as any);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // TODO: add an error handler if statement
  const getFavoriteRecipes = async () => {
    const favoriteRecipes = await UsersFavoriteFood({data: sampleFavoriteRecipes});
    setFoods(favoriteRecipes);
    setLoading(false);
  };
  
  useEffect(() => {
    getFavoriteRecipes();
  }, []);

  return (
    <div className={styles.myListPage}>
      <Nav />
      <h1 className={styles.myListPage_title}>My List</h1>
      <div className={styles.myListPage_recipes}>
        {loading ? (
          <SkeletonCard arrayNumber={6} />
        ) : (
          foods.map((food: any, index: number) => {
            return (
              <>
                <FoodCard setModalOpen={setModalOpen} key={index} data={food} />
              </>
            );
          })
        )}
      </div>
      {/* <SkeletonCard /> */}
      <RecipeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default MyList;

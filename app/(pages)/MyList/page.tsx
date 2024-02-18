"use client";
import React, { useEffect, useState } from "react";
import { FoodCard, Nav } from "../../Component";
import { Modal } from "@mui/material";
import SpoonRecipes from "../../api/SpoonRecipes";
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
    const favoriteRecipes = await Promise.all(
      sampleFavoriteRecipes.map((recipeId: string) =>
        SpoonRecipes({ incomingData: recipeId, resultOffset: 0 })
      )
    ).then((response) => {
      const foodData = response.map((food: any) => {
        const { id, title, image } = food.data.results[0];
        return { id, title, image };
      });

      return foodData;
    });
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
      <Modal
        className={styles.modal}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <h1>Recipe Title</h1>
      </Modal>
    </div>
  );
};

export default MyList;

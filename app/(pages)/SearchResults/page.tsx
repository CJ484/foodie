"use client";
import React, { useState, useEffect, Suspense } from "react";
import {
  FoodCard,
  Nav,
  PageSelector,
  RecipeModal,
  SkeletonCard,
} from "../../Component";
import { ToastContainer } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { RecipeCardApi, SpoonRecipes } from "../../api";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../assets/styles/pages/searchResults.module.scss";
const SearchResults = () => {
  const searchParams = useSearchParams();
  const queryResults = searchParams.get("query");

  const [loading, setLoading] = useState(true);
  const [foodData, setFoodData] = useState([] as any);
  const [pageCountLimit, setPageCountLimit] = useState(0);
  const [resultsOffSet, setResultsOffSet] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [recipeImage, setRecipeImage] = useState("" as any);

  const displayRecipeImage = (e: any) => {
    RecipeCardApi({ recipeId: e.target.id }).then((response: any) => {
      setRecipeImage(response.data.image);
    });
  };

  const searchFoodApi = async () => {
    await SpoonRecipes({
      incomingData: queryResults,
      resultOffset: resultsOffSet,
    }).then((results) => {
      setPaginationLimit(results.data.totalResults);
      setFoodIncomingData(results.data.results);
      setLoading(false);
    });
  };

  const setPaginationLimit = (foodCount: number) => {
    const pages = Math.ceil(foodCount / 10) - 12;

    setPageCountLimit(pages);
  };

  const setFoodIncomingData = (input: any) => {
    const spoonApiData = input.map((data: any) => {
      const { title, image, id } = data;
      return { title: title, image: image, id: id };
    });
    setFoodData(spoonApiData);
  };

  useEffect(() => {
    setLoading(true);
    searchFoodApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, resultsOffSet]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.searchResultsPage}>
        <Nav />
        <h1 className={styles.searchQuery}>
          Search Results for &quot;{queryResults}&quot;
        </h1>
        <div className={styles.foodResults}>
          {loading ? (
            <SkeletonCard arrayNumber={6} />
          ) : (
            foodData.map((data: any, index: number) => {
              return (
                <FoodCard
                  recipeCardFunction={displayRecipeImage}
                  setModalOpen={setModalOpen}
                  key={index}
                  data={data}
                />
              );
            })
          )}
        </div>
        <PageSelector
          setResultsOffSet={setResultsOffSet}
          pageCount={pageCountLimit}
        />
        <RecipeModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <ToastContainer />
      </div>
    </Suspense>
  );
};

export default SearchResults;

import { createContext, useContext, useState } from "react";

const FavoritsContext = createContext();

export function FavoritMealsProvider(props) {
  const [favoritMealsIds, setFavoritMealsIds] = useState([]);

  function addFavorit(mealId) {
    setFavoritMealsIds((current) => [...current, mealId]);
  }

  function removeFavorit(mealId) {
    setFavoritMealsIds((current) =>
      current.filter((favMealId) => favMealId !== mealId)
    );
  }

  const value = { ids: favoritMealsIds, addFavorit, removeFavorit };

  return <FavoritsContext.Provider value={value} {...props} />;
}

export function useFavoritMeals() {
  const context = useContext(FavoritsContext);

  if (context === undefined)
    throw new Error("FavoritMealsProvider must be a parrent of this component");

  return context;
}

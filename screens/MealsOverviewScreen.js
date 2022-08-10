import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

import { CATEGORIES, MEALS } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const {
    params: { categoryId },
  } = route;

  const dispayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(({ id }) => id === categoryId)?.title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealsList items={dispayedMeals} />;
}

export default MealsOverviewScreen;

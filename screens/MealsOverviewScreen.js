import { useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";

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

  return (
    <FlatList
      data={dispayedMeals}
      renderItem={({ item }) => (
        <MealItem
          {...item}
          onPress={() => navigation.navigate("MealDetail", { mealId: item.id })}
        />
      )}
      keyExtractor={({ id }) => id}
      style={styles.container}
    ></FlatList>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

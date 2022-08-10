import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useFavoritMeals } from "../store/context/favorit-context";

function FavoritsScreen() {
  const { ids } = useFavoritMeals();
  const favoritMeals = MEALS.filter(({ id }) => ids.includes(id));

  if (favoritMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Have no favorit meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoritMeals} />;
}

export default FavoritsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

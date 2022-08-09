import { useLayoutEffect } from "react";
import { Text, StyleSheet, Image, ScrollView, View } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ navigation, route }) {
  const {
    params: { mealId },
  } = route;
  const selectedMeal = MEALS.find(({ id }) => id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  listContainer: {
    width: "80%",
  },
});

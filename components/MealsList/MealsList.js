import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ items, style }) {
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <MealItem
          {...item}
          onPress={() => navigate("MealDetail", { mealId: item.id })}
        />
      )}
      keyExtractor={({ id }) => id}
      style={[styles.container, style]}
    />
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

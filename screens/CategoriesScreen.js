import { FlatList } from "react-native";

import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile
          title={item.title}
          color={item.color}
          onPress={() =>
            navigation.navigate("MealsOverview", { categoryId: item.id })
          }
        />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;

import { useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

function MealDetailScreen({ navigation, route }) {
  const {
    params: { item },
  } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.title,
    });
  }, [item]);

  return (
    <View style={styles.mealItem}>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({});

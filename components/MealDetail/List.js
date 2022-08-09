import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#e2b497",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((datapoint) => (
    <View key={datapoint} style={styles.listItem}>
      <Text style={styles.itemText}>{datapoint}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#e2b497",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});

import { View, Text, StyleSheet } from "react-native";

const MealDetail = ({duration, complexity, affordability, textStyle}) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  detailsItem: {
    fontSize: 10,
    marginHorizontal: 8,
  },
});

import { View, FlatList, StyleSheet } from "react-native";

import MealItem from "./MealItem";

const MealList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealDetails");
    };
    const item = itemData.item;

    const mealProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealProps} onPress={pressHandler} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

import { useContext } from "react";
import { useSelector } from "react-redux";
import { StyleSheet, View, Text } from "react-native";

import { FavoritesContext } from "../store/context/favorite-context";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)

  // const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id))
  const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id))

  if(favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You do not have a favorite meal</Text>
      </View>
    )
  }

  return <MealList items={favoriteMeals}/>;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})

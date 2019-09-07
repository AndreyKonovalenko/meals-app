import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
// useSelector is alternative of connent for functional components
import {useSelector} from 'react-redux';

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    element => element.categoryIds.indexOf(catID) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, meybe check your filters?</DefaultText>
      </View>
    );
  }
  return (
    <MealList listDataArray={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const catID = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(element => element.id === catID);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;

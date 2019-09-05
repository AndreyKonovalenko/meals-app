import React from 'react';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    element => element.categoryIds.indexOf(catID) >= 0
  );

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

export default CategoryMealsScreen;

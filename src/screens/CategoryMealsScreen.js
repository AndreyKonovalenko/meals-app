import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
// useSelector is alternative of connent for functional components
import {useSelector} from 'react-redux';

const CategoryMealsScreen = props => {
  const catID = props.navigation.getParam('categoryId');

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
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

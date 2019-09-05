import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(elemet => elemet.id === 'm1' || elemet.id === 'm2');
  return (
    <MealList listDataArray={favMeals} navigation={props.navigation}/>
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Your Favorites'
}



export default FavoritesScreen;

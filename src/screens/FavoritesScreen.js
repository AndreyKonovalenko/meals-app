import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavoritesScreen = props => {
  const favMeals = MEALS.filter(elemet => elemet.id === 'm1' || elemet.id === 'm2');
  return (
    <MealList listDataArray={favMeals} navigation={props.navigation}/>
  );
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item title='Menu' iconName='ios-menu' onPress={() => {navData.navigation.toggleDrawer();}} />
  </HeaderButtons>)
  };
};


export default FavoritesScreen;

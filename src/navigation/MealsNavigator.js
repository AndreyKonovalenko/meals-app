import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreens from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Catigories: CategoriesScreens,
  CategoryMeals: {
    screen: CategoryMealsScreen
  }, // longer form
  MealDetail: MealDetailScreen
}, {
  //mode: 'model',
  //initialRouteName: 'Categories',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>;
      },
      tabBarColor: Colors.primary
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>;
      },
      tabBarColor: Colors.secondary
    }
  }
};

const MealsFavTabNavigator = Platform.OS === 'android' ?
  createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true
  }) :
  createBottomTabNavigator(tabScreenConfig, {

  }, {
    tabBarOptions: {
      activeTintColor: Colors.secondary
    }
  });

export default createAppContainer(MealsFavTabNavigator);

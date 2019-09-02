import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreens from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
  Catigories: CategoriesScreens,
  CategoryMeals: {
    screen: CategoryMealsScreen
  }, // longer form
  MealDetail: MealDetailScreen
});

export default createAppContainer(MealsNavigator);

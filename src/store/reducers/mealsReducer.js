import {MEALS} from '../../data/dummy-data';
import {TOGGLE_FAVORITE, SET_FILTERS} from '../actions/mealsActions';
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favoriteMeals: updatedFavMeals};
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
      }
    case SET_FILTERS:
      const applidFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(element => {
        if (applidFilters.glutenFree && !element.isGlutenFree) {
          return false;
        }
        if (applidFilters.lactoseFree && !element.isLactoseFree) {
          return false;
        }
        if (applidFilters.vegetarian && !element.isVegetarian) {
          return false;
        }
        if (applidFilters.vegan && !element.isVegan) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals};
    default:
      return state;
  }
};

export default mealsReducer;

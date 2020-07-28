import {TEST_ACTION, MealState, ConfigActionTypes} from './types';

const initialState = {
  allMeals: [
    {
      uuid: 'c38d5280-667e-47e8-ad52-d980970c6ff2',
      title: 'Smoked fish linguini',
      subTitle: '',
      rating: 5,
      distance: 1,
      imageUrl: '',
      portions: 2,
      price: 4,
      location: {
        latitude: 51.500293,
        longitude: -3.170266,
      },
    },
    {
      uuid: 'c38d5280-667e-47e8-ad52-d980970hgfg2',
      title: 'Tandori chicken salad',
      subTitle: '',
      rating: 4,
      distance: 2,
      imageUrl: '',
      portions: 3,
      price: 3,
      location: {
        latitude: 51.499752,
        longitude: -3.173957,
      },
    },
    {
      uuid: 'c38d5280-667e-47e8-ad52-d980970poiu2',
      title: 'Chicken buriani',
      subTitle: '',
      rating: 3,
      distance: 2,
      imageUrl: '',
      portions: 4,
      price: 2,
      location: {
        latitude: 51.498523,
        longitude: -3.170524,
      },
    },
  ],
  focusedMeal: {
    uuid: null,
    title: '',
    subTitle: '',
    rating: '',
    distance: '',
    imageUrl: '',
    description: '',
    portions: '',
    location: {
      latitude: null,
      longitude: null,
    },
  },
};

function meals(state = initialState, action: ConfigActionTypes) {
  switch (action.type) {
    case TEST_ACTION:
      return {
        ...state,
        test: action.value,
      };
    default:
      return state;
  }
}

export default meals;

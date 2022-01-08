import { getTrendFoods, LOAD_TASKS } from "../Types/getTypes";

const initialState = {
  TrendingCategory: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TASKS:
      return {
        ...state,
        TrendingCategory: action.payload,
      };
    default:
      return state;
  }
};

export default foodReducer;

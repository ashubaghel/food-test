import { getTrendFoods, LOAD_TASKS } from "../Types/getTypes";

export const getTrendFood = (data) => {
  return {
    type: getTrendFoods,
  };
};

export const setTrendFood = (data) => {
  return {
    type: LOAD_TASKS,
    payload: data,
  };
};

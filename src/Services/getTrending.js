import Axios from "axios";

export const getTrendings = () => {
  return Axios.request({
    method: "get",
    url: "https://edamam-food-and-grocery-database.p.rapidapi.com/parser",
    params: { ingr: "apple" },
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
      "x-rapidapi-key": "ea08be3fc6msh420291768b58982p13f2c5jsn6915183d2a2e",
    },
  });
};

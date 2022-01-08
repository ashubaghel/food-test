import React from "react";

function FoodImage({ item }) {
  return (
  
    <div className="item" key={item.food}>
      <div className="col-xs-12 col-sm-12 col-md-12 food-item">
        <div className="food-item-wrap">
          <a href="search_list_new_foods.html">
            <div
              className="figure-wrap bg-image"
              style={{
                backgroundImage: `url(${item.food.image}) `,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "200px",
              }}
            ></div>
          </a>
        </div>
      </div>
      </div>
   
  );
}

export default FoodImage;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTrendFood } from "../../Actions/FoodAction";
import FoodImage from "./FoodImage";

function Foods() {
  const trending = useSelector((state) => state.trendingFood);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrendFood());
  }, []);
  
  const { text, hints } = trending.TrendingCategory;
  if (hints !== undefined) {
    hints.slice(0, 5).map((item) => {
     
    });
  }

  const TrendingFood =   () =>{

  return <div id="owl_product">

  {
    hints ? (<div class="item">
   <div class="col-xs-12 col-sm-12 col-md-12 food-item">
     <div class="food-item-wrap">
              <a href="search_list_new_foods.html">
                 <div class="figure-wrap bg-image"  style={{
                backgroundImage: `url() `,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "200px",
              }}>
                                            </div>
                                        </a>
                                    </div>
                                </div>
      
      
      </div>) : ""
  }

 </div>
  }


  return (
    <>
      { TrendingFood()}
    </>
  );
}

export default Foods;

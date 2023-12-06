import React, { useCallback, useState, useEffect } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton({ toggleFavoritedArr, itemId, isFavoritedArr }) {
  const inFavoritedArr = isFavoritedArr?.includes(itemId); // check if current item is favorited 

  //handle click event for favorite button
  const handleClick = (event) => {
    event.preventDefault();
    toggleFavoritedArr(itemId); // togle state in parent component
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={inFavoritedArr} />
      </div>
    </div>
  );
}

export default PhotoFavButton;

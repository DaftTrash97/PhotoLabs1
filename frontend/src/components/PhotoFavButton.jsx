
import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ toggleFavoritedArr, itemId }) {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavoritedItem = useCallback(() => {
    //state to track if photo is favorited 
    setFavorited((prevFavorited) => !prevFavorited);
  }, []);

  //handle click event for favorite button
  const handleClick = () => {
    toggleFavoritedItem(); //toggle local state
    toggleFavoritedArr(itemId);// togle state in parent component 
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
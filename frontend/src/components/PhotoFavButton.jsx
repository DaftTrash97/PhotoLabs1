
import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({toggleFavoritedArr, itemId}) {
  const [isFavorited, setFavorited] = useState(false);

  const toggleFavoritedItem = useCallback(() => {
    setFavorited((prevFavorited) => !prevFavorited);
  }, []);

  const handleClick = () => {
    toggleFavoritedItem();
    toggleFavoritedArr(itemId);
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
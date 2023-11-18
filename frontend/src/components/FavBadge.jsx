import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, selected }) => {
  return (
    <div className='fav-badge'>
      <FavIcon 
        displayAlert={!!isFavPhotoExist} //show alter if there are favorited photos
        selected={selected} //show if the badge is selected
      />
    </div>
  ) 
};

export default FavBadge;
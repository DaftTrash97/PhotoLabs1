import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";

const PhotoList = ({ toggleFavoritedArr, onPhotoClick, dispatch }) => {
  
  const photoItems = photos.map((photo) => (
    <PhotoListItem
      key={photo.id}
      location={photo.location}
      imageSource={photo.urls.regular}
      username={photo.user.name}
      profile={photo.user.profile}
      toggleFavoritedArr={toggleFavoritedArr}
      itemId={photo.id}
      dispatch={dispatch}
      onClick={() => onPhotoClick(photo)}
    />
  ));

  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;

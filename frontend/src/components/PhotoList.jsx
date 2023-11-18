import React, { useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photoData, toggleFavoritedArr, onPhotoClick, dispatch }) => {
  
  //only render photos if photoData is an array
  const photoItems = Array.isArray(photoData)
    ? photoData.map((photo) => (
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
      similarPhotos = {photo.data}
    />
  ))
  :null;

  return <ul className="photo-list">{photoItems}</ul>;
};

export default PhotoList;

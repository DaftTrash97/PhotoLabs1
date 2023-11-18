import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { isOpen, onClose, selectedPhoto, similarPhotos, toggleFavoritedArr,
    photoData } = props;

  //if the modal is not open or there is no photo selected render nothing 
  if (!isOpen || !selectedPhoto) {
    return null;
  }

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div className="photo-details-modal__images">
        <PhotoFavButton toggleFavoritedArr={toggleFavoritedArr} itemId={selectedPhoto.Id}
        />
        <img
          className="photo-details-modal__image"
          src={selectedPhoto.urls.regular}
          alt={`Photo by ${selectedPhoto.user.name}`}
        />
      </div>
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={selectedPhoto.user.profile}
          alt={`${selectedPhoto.user.name}'s profile`}
        />
        <div className="photo-details-modal__photographer-info">
          {`${selectedPhoto.user.name}`}
          <p className="photo-details-modal__photographer-location">
            {`${selectedPhoto.location.city}, ${selectedPhoto.location.country}`}
          </p>
        </div>
      </div>

      <h2 className="photo-details-modal__header">Similar Photos</h2>

      <PhotoList photoData={photoData} toggleFavoritedArr={toggleFavoritedArr} itemId={selectedPhoto.id} />
    </div>

  );
};

export default PhotoDetailsModal;

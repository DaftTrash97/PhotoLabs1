import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';
import useApplicationData, { ACTIONS } from '../hooks/useApplicationData';

const HomeRoute = () => {
  const { state, updateToFavPhotoIds, setPhotoSelected, onClosePhotoDetailsModal, photoData, topicData, fetchTopicPhotos } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigationBar isFavoritedArr={state.isFavoritedArr} />
      <PhotoList
        toggleFavoritedArr={(itemId) =>
          updateToFavPhotoIds(itemId)
        }
        onPhotoClick={(photo) =>
          setPhotoSelected(photo)
        }
      />
      <PhotoDetailsModal
        isOpen={state.isModalOpen}
        onClose={onClosePhotoDetailsModal}
        selectedPhoto={state.selectedPhoto}
        similarPhotos={state.similarPhotos}
        toggleFavoritedArr={(itemId) =>
          updateToFavPhotoIds(itemId)
        }
      />
    </div>
  );
};

export default HomeRoute;
import React from "react";
import "../styles/HomeRoute.scss";
import TopNavigationBar from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData, { ACTIONS } from "../hooks/useApplicationData";

const HomeRoute = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    photoData,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigationBar
        isFavoritedArr={state.isFavoritedArr}
        topicData={state.topicData}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {state.photoData && (
        <PhotoList
          toggleFavoritedArr={(itemId) => updateToFavPhotoIds(itemId)}
          onPhotoClick={(photo) => setPhotoSelected(photo)}
          photoData={state.photoData}
        />
      )}
      <PhotoDetailsModal
        isOpen={state.isModalOpen}
        onClose={onClosePhotoDetailsModal}
        selectedPhoto={state.selectedPhoto}
        similarPhotos={state.similarPhotos}
        toggleFavoritedArr={(itemId) => updateToFavPhotoIds(itemId)}
        photoData={state.photoData}
      />
    </div>
  );
};

export default HomeRoute;

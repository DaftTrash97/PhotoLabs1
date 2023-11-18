import { useEffect, useReducer } from 'react';

export const ACTIONS = {
  FAV_PHOTO_TOGGLED: 'FAV_PHOTO_TOGGLED',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC_PHOTOS: 'SET_TOPIC_PHOTOS',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_TOGGLED:
      return {
        ...state,
        isFavoritedArr: state.isFavoritedArr.includes(action.payload.itemId)
          ? state.isFavoritedArr.filter((id) => id !== action.payload.itemId)
          : [...state.isFavoritedArr, action.payload.itemId],
      };

    case ACTIONS.SET_PHOTO_SELECTED:
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload.photo,
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
        similarPhotos: [],
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case ACTIONS.SET_TOPIC_PHOTOS:
      return {
        ...state,
        photoData: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  isFavoritedArr: [],
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  photoData: [],
  topicData: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (itemId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_TOGGLED, payload: { itemId } });
  };

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SET_PHOTO_SELECTED, payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS_MODAL });
  };

  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_TOPIC_PHOTOS', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
  }, []);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    fetchPhotosByTopic
  };
};

export default useApplicationData;
import { useEffect, useReducer } from 'react';

// Define action types for the reducer
export const ACTIONS = {
  FAV_PHOTO_TOGGLED: 'FAV_PHOTO_TOGGLED',
  SET_PHOTO_SELECTED: 'SET_PHOTO_SELECTED',
  CLOSE_PHOTO_DETAILS_MODAL: 'CLOSE_PHOTO_DETAILS_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_TOPIC_PHOTOS: 'SET_TOPIC_PHOTOS',
};

// Reducer function to handle different actions and update the state
function reducer(state, action) {
  switch (action.type) {
    // Toggle favorite photo in the array
    case ACTIONS.FAV_PHOTO_TOGGLED:
      return {
        ...state,
        isFavoritedArr: state.isFavoritedArr.includes(action.payload.itemId)
          ? state.isFavoritedArr.filter((id) => id !== action.payload.itemId)
          : [...state.isFavoritedArr, action.payload.itemId],
      };

    // Set the selected photo for the modal
    case ACTIONS.SET_PHOTO_SELECTED:
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload.photo,
      };
    // Close the photo details modal
    case ACTIONS.CLOSE_PHOTO_DETAILS_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
        similarPhotos: [],
      };
    
    // Set the photo data in the state
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    //Set the topic data in the state
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    // Set the photo data for a specific topic
    case ACTIONS.SET_TOPIC_PHOTOS:
      return {
        ...state,
        photoData: action.payload,
      };

    default:
      return state;
  }
}

//Inital state for the app
const initialState = {
  isFavoritedArr: [],
  isModalOpen: false,
  selectedPhoto: null,
  similarPhotos: [],
  photoData: [],
  topicData: [],
};

//custom hook to manage state and actions
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

  //fetch photo data
  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  }, []);

  //fetch topic data 
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
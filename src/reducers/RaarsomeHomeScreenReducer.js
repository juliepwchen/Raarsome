import { 
    CAMERA_MODAL_OPEN, 
    AVATAR_MODAL_OPEN,
    TREASURE_MODAL_OPEN,
    BTN_FAB_OPEN,
    COIN_EXIST
  } from '../actions/types';
  
  const INITIAL_STATE = {
    isCameraModalOpen: false,
    isAvatarModalOpen: false,
    isTreasureModalOpen: false,
    isFABOpen: false,
    isCoinExist: true
  };
  
  export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case CAMERA_MODAL_OPEN:
          return { ...state, isCameraModalOpen: action.payload.isCameraModalOpen };
        case AVATAR_MODAL_OPEN:
          return { ...state, isAvatarModalOpen: action.payload.isAvatarModalOpen };
        case TREASURE_MODAL_OPEN:
          return { ...state, isTreasureModalOpen: action.payload.isTreasureModalOpen };
        case BTN_FAB_OPEN:
          return { ...state, isFABOpen: action.payload.isFABOpen };
        case COIN_EXIST:
          return { ...state, isCoinExist: action.payload.isCoinExist };
        default:
          return state;
    }
  };
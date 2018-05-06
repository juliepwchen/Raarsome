import { 
    CAMERA_MODAL_OPEN, 
    AVATAR_MODAL_OPEN,
    TREASURE_MODAL_OPEN,
    BTN_FAB_OPEN,
    COIN_EXIST
} from '../actions/types';

export const cameraModalOpen = ({ isCameraModalOpen }) => {
    return({
        type: CAMERA_MODAL_OPEN,
        payload: { isCameraModalOpen }
    });  
};

export const avatarModalOpen = ({ isAvatarModalOpen }) => {
    return({
        type: AVATAR_MODAL_OPEN,
        payload: { isAvatarModalOpen }
    });  
};

export const treasureModalOpen = ({ isTreasureModalOpen }) => {
    return({
        type: TREASURE_MODAL_OPEN,
        payload: { isTreasureModalOpen }
    });  
};

export const btnFABOpen = ({ isFABOpen }) => {
    return({
        type: BTN_FAB_OPEN,
        payload: { isFABOpen }
    });  
};

export const coinExist = ({ isCoinExist }) => {
    return({
        type: COIN_EXIST,
        payload: { isCoinExist }
    });  
};
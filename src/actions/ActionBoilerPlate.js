/*

import { <TYPE> } from './types';

export const <actionCreator Name> = ({a, b}) => {
  return({
      type: <TYPE>,
      payload: {a, b}
  });  
};

//When using Redux Thunk, return a function

export const <actionCreator Function Name> = () => {
    return (dispatch) => {
        dispatch({
          type: LOGIN_USER
        });
        //when callback is completed
        //call dispatch
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => dispatch({ type: LOGIN_USER_SUCCESS, payload: user }))
          .catch(() => dispatch({ type: LOGIN_USER_FAIL }));
    };
};

*/
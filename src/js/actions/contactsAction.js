import firebase from 'firebase';
import { CONTACTS_FETCH_SUCCESS } from './types';

export const contactsFetch = () => {
    return (dispatch) => {
        firebase.database().ref(`/users`)
          .on('value', snapshot => {
            dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: snapshot.val() });
          });
      };
}

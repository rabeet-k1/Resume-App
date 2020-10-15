import firebase from '../../Config/firebaseConfig';

export const signOut = () => {
    return (dispatch) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: "SIGNOUT_SUCCESS" })
        })
    }
}

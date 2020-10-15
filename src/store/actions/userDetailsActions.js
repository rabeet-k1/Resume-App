
export const userDetails = (user) => {
    return (dispatch) => {
        // console.log(user, 'action');
        dispatch({ type: "USER_DETAILS", payload: user });
    }
}


const userDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case "USER_DETAILS":
            // console.log("user details REDUCER", action.payload);
            return {
                ...state,
                user: action.payload
                // authError: "Login Failed"
            };

        default:
            return state;
    }
}

export default userDetailsReducer;
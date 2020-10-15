
const authReducer = (state = {}, action) => {
    switch (action.type) {
        case "SIGNOUT_SUCCESS":
            console.log("Successfully SignOut");
            return state;

        default:
            return state;
    }
}

export default authReducer;
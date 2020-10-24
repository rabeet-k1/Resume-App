export const userSkills = userSkills => {
  return dispatch => {
    // console.log(userSkills, "action");
    dispatch({ type: "ADD_USER_SKILLS", payload: userSkills });
  };
};

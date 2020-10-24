const resumeDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SKILL_FIELDS":
      // console.log(action.payload);
      return {
        ...state,
        skillFields: action.payload,
      };

    case "ADD_USER_SKILLS":
      // console.log(action.payload);
      return {
        ...state,
        userSkills: action.payload,
      };

    default:
      return state;
  }
};

export default resumeDetailsReducer;

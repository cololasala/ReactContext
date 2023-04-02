export const UserReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_PROFILE":
      return {
        ...state,
        selectedUser: action.payload,
      };

    default:
      return state;
  }
};

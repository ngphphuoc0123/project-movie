import * as type from "../Action/Type";

let initialState = {
  credential: null,
  user: null,
  userEdit: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_CREDENTIAL:
      state.credential = action.data;
      return { ...state };
    case type.FETCH_USER_INFO:
      state.user = action.data;
      return { ...state };
    case type.FETCH_USER_EDIT:
      state.userEdit = action.data;
      return { ...state };
    
    default:
      return state;
  }
};

export default UserReducer;

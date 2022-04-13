const initialState = "";

export const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UID":
      return action.payload;
    default:
      return state;
  }
};

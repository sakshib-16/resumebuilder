// import action from './action'

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        ...action.payload,
      };
    case "RESET":
      return (state = null);
    default:
      return state;
  }
};

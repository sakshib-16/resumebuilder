const initialState = {
  exjobtitle: null,
  company: null,
  monthfrom: null,
  yearfrom: null,
  monthto: null,
  yearto: null,
  accomplishment: null,
};
export const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "exjobtitle":
      return { ...state, exjobtitle: action.payload };
    case "company":
      return { ...state, company: action.payload };
    case "monthfrom":
      return { ...state, monthfrom: action.payload };
    case "yearfrom":
      return { ...state, yearfrom: action.payload };
    case "monthto":
      return { ...state, monthto: action.payload };
    case "yearto":
      return { ...state, yearto: action.payload };
    case "accomplishment":
      return { ...state, accomplishment: action.payload };
    case "exp":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

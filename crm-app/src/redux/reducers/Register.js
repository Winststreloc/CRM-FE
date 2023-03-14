const defaultState = {
  number: 1,
  regData: {},
};

const numberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_NUMBER":
      return { ...state, number: action.payload };
    case "ADD_REGDATA":
      return { ...state, regData: action.payload };
    default:
      return state;
  }
};

export const registerSelector = (state) => state;

export const addRegData = (payload) => ({ type: "ADD_REGDATA", payload });
export const setNumber = (payload) => ({ type: "SET_NUMBER", payload });
export default numberReducer;

import axios from "axios";

const initialState = [];

const dataStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_STATE_DATE":
      return action.payload;
    default:
      return state;
  }
};

export default dataStateReducer;

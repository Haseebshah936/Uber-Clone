import React from "react";
import { DESTINATION, ORIGIN, TRAVELTIMEINFO } from "./ActionType";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export default Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORIGIN:
      return {
        ...state,
        origin: action.payload.origin,
      };
    case DESTINATION:
      return {
        ...state,
        destination: action.payload.destination,
      };
    case TRAVELTIMEINFO:
      return {
        ...state,
        travelTimeInformation: action.payload.travelTimeInformation,
      };
    default:
      return state;
  }
};

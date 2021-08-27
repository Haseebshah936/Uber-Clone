import { DESTINATION, ORIGIN, TRAVELTIMEINFO } from "./ActionType";

export const setOrigin = (origin) => {
  return {
    type: ORIGIN,
    payload: {
      origin,
    },
  };
};

export const setDestination = (destination) => {
  return {
    type: DESTINATION,
    payload: {
      destination,
    },
  };
};

export const setTravelTimeInfo = (travelTimeInformation) => {
  return {
    type: TRAVELTIMEINFO,
    payload: {
      travelTimeInformation,
    },
  };
};

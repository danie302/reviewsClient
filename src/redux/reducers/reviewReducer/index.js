import {GET_REVIEWS} from "@redux/types";
  
  const initialState = {};
  
  export function reviewsReducer(
    state = initialState,
    action
  ) {
    switch (action.type) {
      case GET_REVIEWS: {
        return {
          ...state
        };
      }
      default:
        return state;
    }
  }
  
// Dependencies
import { combineReducers } from "redux";
import { reviewsReducer } from "@redux/reducers/reviewReducer"

export const rootReducer = combineReducers({
  reviews: reviewsReducer
});
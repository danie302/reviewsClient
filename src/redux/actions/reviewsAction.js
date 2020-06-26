// Dependencies
import axios from "axios";

// Types
import { GET_REVIEWS } from "@redux/types/";

export const getReviews = async () => {
  let { data: reviews } = await axios.get(process.env.REVIEWS);
  return {
    type: GET_REVIEWS,
    payload: reviews,
  };
};

import { ADD_REVIEWS } from "../actionTypes";

const initialState = {
  reviews: JSON.parse(localStorage.getItem("reviews")) || [],
};

export function ReviewsAction(state = initialState, action) {
  switch (action.type) {
    case ADD_REVIEWS:
      return { ...state, reviews: [...state.reviews, action.payload] };
    default:
      return state;
  }
}

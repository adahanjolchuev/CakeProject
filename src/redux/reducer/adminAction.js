import { ADD_CAKE } from "../actionTypes";

const initialState = {
  cake: JSON.parse(localStorage.getItem("cake")) || [],
};

export function AdminAction(state = initialState, action) {
  switch (action.type) {
    case ADD_CAKE:
      return { ...state, cake: [...state.cake, action.payload] };
    default:
      return state;
  }
}

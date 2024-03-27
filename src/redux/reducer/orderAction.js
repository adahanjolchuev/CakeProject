import {
  ADD_ORDER,
  DELETE_ORDER,
  MINUS_COUNT_ORDER,
  PLUS_COUNT_ORDER,
} from "../actionTypes";

const initialS = {
  order: JSON.parse(localStorage.getItem("order")) || [],
  orderCount: JSON.parse(localStorage.getItem("countOrder")) || 0,
};
console.log(initialS);

function OrderAction(state = initialS, action) {
  switch (action.type) {
    case ADD_ORDER:
      return { ...state, order: [...state.order, action.payload] };
    case DELETE_ORDER:
      const Deleteorder = state.order.filter((el) => el.id !== action.payload);
      localStorage.setItem("order", JSON.stringify(Deleteorder));
      return { ...state, order: Deleteorder };
    case PLUS_COUNT_ORDER:
      let orderCountPlus = state.orderCount + action.payload;

      let dataPlus = JSON.parse(localStorage.getItem("countOrder")) || 1;

      dataPlus = orderCountPlus;

      localStorage.setItem("countOrder", JSON.stringify(dataPlus));

      return { ...state, orderCount: dataPlus };

    case MINUS_COUNT_ORDER:
      let orderCountMinus = state.orderCount - action.payload;
      let dataMinus = JSON.parse(localStorage.getItem("countOrder")) || [];
      dataMinus = orderCountMinus;
      localStorage.setItem("countOrder", JSON.stringify(dataMinus));
      return { ...state, orderCount: dataMinus };
    default:
      return state;
  }
}
export default OrderAction;

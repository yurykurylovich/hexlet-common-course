import omit from "lodash/omit";
import { createStore } from "redux";

// reducer - (перев. с анлг.) преобразователь
const reducer = (state = {}, action) => {
  switch (action.type) {
    case ('TASK_ADD'):
      const { task } = action.payload;
      return {...state, [task.id]: task};
    case ('TASK_REMOVE'):
      const { id } = action.payload;
      return omit(state, id);
    default:
      return state;
  }
};

export default (initState) => createStore(reducer, initState);

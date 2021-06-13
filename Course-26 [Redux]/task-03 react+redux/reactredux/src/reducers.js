import { combineReducers } from "redux";

const text = (state = '', action) => {
  switch (action.type) {
    case ('TEXT_UPDATE'):
      const { text } = action.payload;
      return text;
    case ('TEXT_RESET'):
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  text,
})

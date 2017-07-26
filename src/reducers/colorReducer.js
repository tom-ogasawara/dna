import {
  RECEIVE_CURRENT_QUESTION,
  RECEIVE_QUESTIONS
} from '../actions/colorActions';

const initialState = {
  adenine: "white"
};

const ColorReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_QUESTION:
      return { currentColor: action.color };
    case RECEIVE_QUESTIONS:
      return { colors: action.colors };
    default:
      return state;
  }
};

export default ColorReducer;

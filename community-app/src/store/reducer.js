// initial state
const initialState = {};

// Types
const CHANGE_INPUT = 'CHANGE_INPUT';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// action creator
export const changeInput = (value, name) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

// export
export default reducer;

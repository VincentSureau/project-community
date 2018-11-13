// initial state
const initialState = {
  message: 'hello',
};

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_MESSAGE':
      return {
        ...state,
        message: action.message,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// action creator
export const changeMessage = message => ({
  type: 'CHANGE_MESSAGE',
  message,
});

// export
export default reducer;

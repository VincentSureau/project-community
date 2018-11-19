// initial state
const initialState = {
  members: [],
};

// Types
export const GET_MEMBERS = 'GET_MEMBERS';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
        members: action.members,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// Actions creators
export const getMembers = members => ({
  type: GET_MEMBERS,
  members,
});

// export
export default reducer;

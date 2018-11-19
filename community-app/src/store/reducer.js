// initial state
const initialState = {
  members: [],
};

// Types
export const GET_MEMBERS = 'GET_MEMBERS';
export const MEMBERS_RECEIVED = 'MEMBERS_RECEIVED';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MEMBERS:
      return {
        ...state,
      };
    case MEMBERS_RECEIVED:
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
export const getMembers = () => ({
  type: GET_MEMBERS,
});

export const membersReceived = members => ({
  type: MEMBERS_RECEIVED,
  members,
});

// export
export default reducer;

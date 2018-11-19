// initial state
const initialState = {
  members: [
    {
      lastname: 'nom1',
      firstname: 'prenom1',
    },
    {
      lastname: 'nom2',
      firstname: 'prenom2',
    },
    {
      lastname: 'nom3',
      firstname: 'prenom3',
    },
    {
      lastname: 'nom4',
      firstname: 'prenom4',
    },
  ],
};

// Types
export const RECEIVE_MEMBERS = 'RECEIVE_MEMBERS';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RECEIVE_MEMBERS:
      return {
        ...state,
      };
    // Action non-reconnue
    default:
      return state;
  }
};

// Actions creators
export const receiveMembers = payload => ({
  type: RECEIVE_MEMBERS,
  payload,
});

// export
export default reducer;

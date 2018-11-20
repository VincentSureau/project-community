// initial state
const initialState = {
  email: '',
  password: '',
  listMembers: [],
  member: {},
};

// Types
const CHANGE_INPUT = 'CHANGE_INPUT';
export const GET_MEMBERS = 'GET_MEMBERS';
export const MEMBERS_RECEIVED = 'MEMBERS_RECEIVED';
export const GET_MEMBER = 'GET_MEMBER';
export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';

// reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case GET_MEMBERS:
      return {
        ...state,
      };
    case MEMBERS_RECEIVED:
      return {
        ...state,
        listMembers: action.members,
        member: {},
      };
    case GET_MEMBER:
      return {
        ...state,
      };
    case MEMBER_RECEIVED:
      return {
        ...state,
        listMembers: [],
        member: action.member,
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
export const getMembers = () => ({
  type: GET_MEMBERS,
});

export const membersReceived = members => ({
  type: MEMBERS_RECEIVED,
  members,
});

export const getMember = id => ({
  type: GET_MEMBER,
  id,
});

export const memberReceived = member => ({
  type: MEMBER_RECEIVED,
  member,
});

// export
export default reducer;

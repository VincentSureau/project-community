// Types
export const GET_MEMBERS = 'GET_MEMBERS';
export const MEMBERS_RECEIVED = 'MEMBERS_RECEIVED';
export const GET_MEMBER = 'GET_MEMBER';
export const MEMBER_RECEIVED = 'MEMBER_RECEIVED';
export const GET_MEMBERS_SPE = 'GET_MEMBERS_SPE';
export const GET_MEMBER_EDIT = 'GET_MEMBER_EDIT';
export const MEMBER_EDIT_RECEIVED = 'MEMBER_EDIT_RECEIVED';
export const PUT_MEMBER = 'PUT_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const GET_CONNECTED_MEMBER = 'GET_CONNECTED_MEMBER';
export const CONNECTED_MEMBER_RECEIVED = 'CONNECTED_MEMBER_RECEIVED';

// Action creator
export const getMembers = () => ({
  type: GET_MEMBERS,
});

export const membersReceived = members => ({
  type: MEMBERS_RECEIVED,
  members,
});

export const getMember = slug => ({
  type: GET_MEMBER,
  slug,
});

export const memberReceived = member => ({
  type: MEMBER_RECEIVED,
  member,
});

export const getMembersSpe = spe => ({
  type: GET_MEMBERS_SPE,
  spe,
});

export const getMemberEdit = slug => ({
  type: GET_MEMBER_EDIT,
  slug,
});

export const memberEditReceived = member => ({
  type: MEMBER_EDIT_RECEIVED,
  member,
});

export const putMember = (id, data) => ({
  type: PUT_MEMBER,
  id,
  data,
});

export const deleteMember = id => ({
  type: DELETE_MEMBER,
  id,
});

export const getConnectedMember = id => ({
  type: GET_CONNECTED_MEMBER,
  id,
});

export const connectedMemberReceived = connectedMember => ({
  type: CONNECTED_MEMBER_RECEIVED,
  connectedMember,
});

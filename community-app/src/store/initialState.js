// initial state
const initialState = {
  email: '',
  password: '',
  listMembers: [],
  member: {},
  membersHome: [],
  projectsHome: [],
  memberID: '',
  listProjects: [],
  project: {},
  filterSpeMembers: '',
  filterPromoMembers: '',
  filterStatusMembers: '',
  filterTextMembers: '',
  filterSpeProjects: '',
  filterPromoProjects: '',
  filterTextProjects: '',
  listSpe: [],
  listPromo: [],
  listStatus: [],
  value: {},
  isConnected: false,
  // connectedMember: {},
  actualPage: window.location.pathname,
  editFormSend: false,
  slug: '',
  popoverPassword: false,
  messagePassword: '',
};

export default initialState;

export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated });
    case 'SET_PROFILE':
      return Object.assign({}, state, { profile: action.profile.user });
    default:
      return state;
  }
}
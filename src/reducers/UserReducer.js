export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      return Object.assign({}, state, { isAuthenticated: action.isAuthenticated });
    default:
      return state;
  }
}
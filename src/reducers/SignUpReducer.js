export default (state = {}, action) => {
  switch (action.type) {
    case 'COMPLETE_STEP':
      return Object.assign({}, state, { [action.step]: action.data });
    default:
      return state;
  }
}
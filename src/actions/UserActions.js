export const setAuthenticated = (isAuthenticated) => {
    return {
      type: 'SET_AUTHENTICATED',
      isAuthenticated: isAuthenticated
    }
};
class Authenticator {
  static AUTH_TOKEN_KEY = 'auth_token';

  static isAuthenticated() {
    return !!Authenticator.getAuthToken();
  }

  static getAuthToken() {
    return localStorage.getItem(Authenticator.AUTH_TOKEN_KEY);
  }

  static setAuthToken(authToken) {
    localStorage.setItem(Authenticator.AUTH_TOKEN_KEY, authToken);
  }

  static clearAuthToken() {
    localStorage.removeItem(Authenticator.AUTH_TOKEN_KEY);
  }
}

export default Authenticator;
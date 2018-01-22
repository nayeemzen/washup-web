import ApiService from "./ApiService";
import LoginFailedException from "../exceptions/LoginFailedException";
import Authenticator from "./Authenticator";

class UserService extends ApiService {
  constructor() {
    super('/users')
  }

  login = (credentials) => {
    return this.api.post('/login', credentials)
      .then(response => {
        let authorizationHeader = response.headers.authorization;
        if (response.status === 200 && authorizationHeader) {
          return authorizationHeader.split('Bearer ')[1];
        }

        throw new LoginFailedException(response);
      })
      .then(token => {
        Authenticator.setAuthToken(token);
        return token;
      });
  };

  getProfile = () => {
    return this.api.get('/get-profile').then(response => response.data);
  }
}

export default new UserService();
import ApiService from "./ApiService";
import Authenticator from "./Authenticator";
import * as Errors from "../errors/Errors";

class UserService extends ApiService {
  constructor() {
    super('/users');
  }

  getProfile = () => {
    return this.api.get('/get-profile').then(response => response.data);
  };

  authenticate = (endpoint, data) => {
    return this.api.post(endpoint, data)
      .then(response => {
        // Sign up always returns 201 on success, 200 if user already exits.
        if (endpoint === '/sign-up' && response.status === 200) {
          throw Errors.UserAlreadyExists();
        }

        if (response.status === 200 || response.status === 201) {
          return response.headers.authorization.split('Bearer ')[1];
        }

        throw Errors.SignUpFailed();
      })
      .then(token => {
        Authenticator.setAuthToken(token);
        return token;
      });
  };

  signUp = (personalDetails) => this.authenticate('/sign-up', personalDetails);

  login = (credentials) => this.authenticate('/login', credentials);
}

export default new UserService();
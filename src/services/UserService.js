import ApiService from "./ApiService";
import LoginFailedException from "../exceptions/LoginFailedException";
import Authenticator from "./Authenticator";

class UserService extends ApiService {
  constructor() {
    super('/users')
  }

  getProfile = () => {
    return this.api.get('/get-profile').then(response => response.data);
  };

  setAddress = (address) => {
    return this.api.post('/set-address', address).then(response => response.data);
  };

  authenticate = (endpoint, data) => {
    return this.api.post(endpoint, data)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.headers.authorization.split('Bearer ')[1];
        }

        throw new LoginFailedException(response);
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
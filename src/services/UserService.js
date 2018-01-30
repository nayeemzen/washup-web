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

  signup = (personalDetails) => {
    return this.api.post('/sign-up', personalDetails)
      .then(response => {
        let authorizationHeader = response.headers.authorization;
        console.log(response);
        if (response.status === 201 && authorizationHeader) {
          return authorizationHeader.split('Bearer ')[1];
        }

        throw new LoginFailedException(response);
      })
      .then(token => {
        Authenticator.setAuthToken(token);
        return token;
      });
  };

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

}

export default new UserService();
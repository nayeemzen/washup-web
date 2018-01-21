import ApiService from "./ApiService";
import axios from 'axios';
import LoginFailedException from "./exceptions/LoginFailedException";

class UserService extends ApiService {
  constructor() {
    super('/users')
  }

  login = (credentials) => {
    return axios.post(this.apiUrl('/login'), credentials)
      .then(response => {
        let authorizationHeader = response.headers.authorization;
        if (response.status === 200 && authorizationHeader) {
          return authorizationHeader.split('Bearer ')[1];
        }

        throw new LoginFailedException(response);
      })
      .then(token => {
        localStorage.setItem('auth_token', token);
        return token;
      });
  }
}

export default new UserService();
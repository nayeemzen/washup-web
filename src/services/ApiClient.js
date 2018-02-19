import Axios from 'axios';
import history from '../history';
import Authenticator from './Authenticator';

class ApiClient {
  constructor({ base: baseUrl, resource }) {
    this.axios = Axios.create({baseURL: baseUrl + resource});
  }

  post = (path, data = {}) => {
    return this.axios
      .post(path, data, { headers: this.getRequestHeaders() })
      .catch(error => this.handleError(error));
  };

  get = (path) => {
    return this.axios
      .get(path, { headers: this.getRequestHeaders() })
      .catch(error => this.handleError(error));
  };

  getRequestHeaders = () => {
    return {
      Authorization: this.getAuthorizationHeader(),
    };
  };

  getAuthorizationHeader = () => {
    return (
      Authenticator.isAuthenticated()
      && `Bearer ${Authenticator.getAuthToken()}`
    ) || null;
  };

  handleError = (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      Authenticator.clearAuthToken();
      history.push('/login');
    }

    throw error;
  }
}

export default ApiClient;
import Axios from 'axios';
import Authenticator from './Authenticator';

class ApiClient {
  constructor({ base: baseUrl, resource }) {
    this.axios = Axios.create({baseURL: baseUrl + resource});
  }

  post = (path, data = {}) => {
    return this.axios.post(path, data, { headers: this.getRequestHeaders() });
  };

  get = (path) => {
    return this.axios.get(path, { headers: this.getRequestHeaders() });
  };

  getRequestHeaders = () => {
    return {
      Authorization: this.getAuthorizationHeader(),
      Accept: 'application/json'
    };
  };

  getAuthorizationHeader = () => {
    return (
      Authenticator.isAuthenticated()
      && `Bearer ${Authenticator.getAuthToken()}`
    ) || null;
  };
}

export default ApiClient;
import Axios from 'axios';
import Authenticator from './Authenticator';

class ApiClient {
  constructor({ base: baseUrl, resource }) {
    this.axios = Axios.create({
      baseURL: baseUrl + resource,
      headers: {
        Authorization: `Bearer ${Authenticator.getAuthToken()}`,
        Accept: 'application/json'
      }
    });
  }

  post = (path, data = {}) => {
    return this.axios.post(path, data);
  };

  get = (path) => {
    return this.axios.get(path);
  }
}

export default ApiClient;
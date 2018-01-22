import ApiClient from "./ApiClient";

class ApiService {
  constructor(resource) {
    this.api = new ApiClient({
      base: 'http://localhost:8080/api/v1',
      resource: resource
    });
  }
}

export default ApiService;
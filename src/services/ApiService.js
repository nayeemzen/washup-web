import ApiClient from "./ApiClient";
import configuration from "../config/Configuration";

class ApiService {
  constructor(resource) {
    this.api = new ApiClient({
      base: configuration.server_url,
      resource: resource
    });
  }
}

export default ApiService;
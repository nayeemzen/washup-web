class ApiService {
  constructor(resource) {
    this.resourceUrl = `http://localhost:8080/api/v1${resource}`;
  }

  apiUrl = (path) => {
    return `${this.resourceUrl}${path}`
  }
}

export default ApiService;
import ApiService from "./ApiService";

class AddressService extends ApiService {
  constructor() {
    super('/address');
  }

  getAddress = () => {
    return this.api.get('/get-address').then(response => response.data);
  };

  setAddress = (address) => {
    return this.api.post('/set-address', address).then(response => response.data);
  };
}

export default new AddressService();
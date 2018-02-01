import ApiService from "./ApiService";

class OrderService extends ApiService {
  constructor() {
    super('/orders')
  }

  placeOrder = (order) => {
    return this.api.post('/place-order', order).then(response => response.data);
  };
}

export default new OrderService();
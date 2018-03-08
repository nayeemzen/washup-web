import ApiService from "./ApiService";

class OrderService extends ApiService {
  constructor() {
    super('/orders')
  }

  placeOrder = (order) => {
    return this.api.post('/place-order', order).then(response => response.data);
  };

  getOrders = () => {
    return this.api.get('/get-orders').then(response => response.data);
  };

  getReceipt = (orderToken) => {
    return this.api.post('/get-receipt', { order_token: orderToken }).then(response => response.data);
  };
}

export default new OrderService();
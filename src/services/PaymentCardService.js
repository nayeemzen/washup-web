import ApiService from "./ApiService";

class PaymentCardService extends ApiService {
  constructor() {
    super('/users')
  }

  setPaymentCard = (stripeCardToken) => {
    return this.api.post('/set-card', {stripe_card_token: stripeCardToken})
      .then(response => response.data);
  };

  getPaymentCard = () => {
    return this.api.get('/get-card').then(response => response.data);
  }
}

export default new PaymentCardService();
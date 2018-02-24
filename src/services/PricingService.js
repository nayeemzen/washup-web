import ApiService from "./ApiService";

class PricingService extends ApiService {
  constructor() {
    super('/pricing');
  }

  getUserPricing = () => {
    return this.api.get('/get-user-pricing').then(response => response.data);
  };

  getPostalCodePricing = (postalCode) => {
    return this.api.post('/get-postal-code-pricing', postalCode).then(response => response.data);
  };
}

export default new PricingService();
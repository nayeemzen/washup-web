import ApiService from "./ApiService";

class PricingService extends ApiService {
  constructor() {
    super('/pricing');
  }

  getUserPricing = () => {
    return this.api.get('/get-user-pricing').then(response => response.data);
  };

  getPostalCodePricing = (postalCodePricingRequest) => {
    return this.api.post('/get-postal-code-pricing', postalCodePricingRequest).then(response => response.data);
  };
}

export default new PricingService();
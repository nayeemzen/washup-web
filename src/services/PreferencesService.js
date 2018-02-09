import ApiService from "./ApiService";

class PreferencesService extends ApiService {
  constructor() {
    super('/preferences')
  }

  setPreferences = (preferences) => {
    return this.api.post('/set-preferences', preferences).then(response => response.data);
  };

  getPreferences = () => {
    return this.api.get('/get-preferences').then(response => response.data);
  }
}

export default new PreferencesService();
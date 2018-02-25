class Environment {
  static STAGING = 'STAGING';
  static PRODUCTION = 'PRODUCTION';
  static DEVELOPMENT = 'DEVELOPMENT';
  static TEST = 'TEST';

  constructor() {
    this.environment = Environment.currentEnvironment();
  }

  static currentEnvironment = () => process.env.REACT_APP_ENV.toUpperCase();
}

export default Environment;
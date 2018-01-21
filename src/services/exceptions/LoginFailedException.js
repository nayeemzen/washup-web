class LoginFailedException extends Error {
  constructor(response) {
    super();
    this.response = response;
  }
}

export default LoginFailedException;
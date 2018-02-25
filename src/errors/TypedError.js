class TypedError extends Error {
  constructor(type, msg, data) {
    super(msg);
    this.type = type;
    this.data = data;
  }
}

export default TypedError;
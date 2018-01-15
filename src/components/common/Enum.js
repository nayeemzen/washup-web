export default {
  of: (values) => {
    let enums = values.reduce((prev, curr, index) => {
      prev[curr] = index;
      return prev;
    }, {});
    return Object.freeze(enums);
  }
};
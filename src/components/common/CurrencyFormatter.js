const Formatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  minimumFractionDigits: 2,
});

export default Formatter;

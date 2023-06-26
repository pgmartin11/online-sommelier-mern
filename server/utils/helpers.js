module.exports.validate_form = (formData) => {
  return formData.region.length && formData.producer.length;
};

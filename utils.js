const Joi = require('joi');

const bodyValidation = Joi.object({
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().greater(Joi.ref('minCount')).required(),
});

module.exports = { bodyValidation }
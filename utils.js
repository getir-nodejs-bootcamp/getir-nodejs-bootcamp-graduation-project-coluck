const Joi = require('joi');

const bodyValidation = Joi.object({
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required(),
  minCount: Joi.number().required(),
  maxCount: Joi.number().greater(Joi.ref('minCount')).required(),
});

const getAggregation = ({ startDate, endDate, minCount, maxCount }) => {
  return [
    {
      "$match": {
        "$expr": {
          "$and": [
            { "$gt": ["$createdAt", new Date(startDate)] },
            { "$lt": ["$createdAt", new Date(endDate)] },
            { "$gt": [{ "$sum": "$counts" }, minCount] },
            { "$lt": [{ "$sum": "$counts" }, maxCount] },
          ]
        }
      }
    },
    {
      "$project": { "_id": 0, "key": 1, "createdAt": 1, "totalCount": { $sum: "$counts" } }
    }
  ]
}

const getResponse = (code, message, records = []) => {
  return {
    "code": code,
    "msg": message,
    "records": records
  }
}

module.exports = { bodyValidation, getAggregation, getResponse };
const Joi = require("joi");

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const postSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().optional(),
  course: Joi.string().required(),
  branch: Joi.string().required(),
  year: Joi.number().integer().max(1).required(),
  semester: Joi.number().integer().max(1).required(),
  cgpa: Joi.number().required(),
  dob: Joi.date().greater(new Date("1990-01-01")).required(),
  gender: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().max(10).required(),
});

exports.validatePost = validator(postSchema);

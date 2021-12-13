import Joi from "joi";

const productValidate = Joi.object({
  name: Joi.string().min(2).max(225).required(),
  price: Joi.number(),
  description: Joi.string().min(2).max(520),
  image: Joi.string(),
  category: Joi.string(),
});

export default productValidate;

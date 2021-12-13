import Joi from "joi";

const userValidate = Joi.object({
  userName: Joi.string().min(2).max(25).required(),

  //.regex (/*[a-za-z]+$/)

  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
export default userValidate;

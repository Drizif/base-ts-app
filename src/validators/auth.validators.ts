import Joi from "joi";

class UserValidator {
  signIn = () => {
    return Joi.object()
      .keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
  
  signUp = () => {
    return Joi.object()
      .keys({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
}

export default new UserValidator();

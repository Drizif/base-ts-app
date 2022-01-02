import Joi from "joi";

class UserValidator {
  getUser = () => {
    return Joi.object()
      .keys({
        email: Joi.string().optional(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  updateUser = () => {
    return Joi.object()
      .keys({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };

  deleteUser = () => {
    return Joi.object()
      .keys({
        email: Joi.string().required(),
      })
      .options({ allowUnknown: true, stripUnknown: true });
  };
}

export default new UserValidator();

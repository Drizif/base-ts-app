import Joi from "joi";

export const Validator = () => {
  return Joi.object()
    .keys({
      token: Joi.string().required(),
    })
    .options({ allowUnknown: true, stripUnknown: true });
};

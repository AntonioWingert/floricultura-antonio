import * as Joi from 'joi';

export const loginSchema: Joi.ObjectSchema<{
  email: string;
  password: string;
}> = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
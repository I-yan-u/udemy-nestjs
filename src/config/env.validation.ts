import * as joi from 'joi';

export default joi.object({
  APP_NAME: joi.string().default('NestJSApp'),
  NODE_ENV: joi
    .string()
    .valid('development', 'production', 'test', 'staging')
    .default('development'),
  DB_HOST: joi.string().default('localhost'),
  DB_PORT: joi.number().default(5432),
  DB_USERNAME: joi.string().required(),
  DB_PASSWORD: joi.string().required(),
  DB_NAME: joi.string().required(),
});

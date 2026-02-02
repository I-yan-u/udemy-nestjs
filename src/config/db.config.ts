import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'iyanu',
  password: process.env.DB_PASSWORD || 'iyanu',
  name: process.env.DB_NAME || 'nestjs_tutorial',
  synchronize: process.env.DB_SYNC === 'true' || false,
  autoLoadEntities: process.env.DB_AUTOLOAD === 'true' || false,
}));

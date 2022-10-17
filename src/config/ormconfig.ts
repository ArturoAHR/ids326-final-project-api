import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

//this didn't work out

const config = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [join(__dirname, '/../entities/*.entity.{ts,js}')],
  cli: {
    migrationsDir: join(__dirname, '/../database/migrations'),
  },
  migrations: [join(__dirname, '/../database/migrations/*.{ts,js}')],
  seeds: [join(__dirname, '/../database/seeders/**/*{.ts,.js}')],
  factories: [join(__dirname, '/../database/factories/**/*{.ts,.js}')],
};

console.log(process.env.TYPEORM_SEEDING_SEEDS);

module.exports = config;

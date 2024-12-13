import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'personal-finance-tracker',
  username: 'postgres',
  autoLoadEntities: true,
  synchronize: true,
};

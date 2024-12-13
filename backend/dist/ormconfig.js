"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: Number(process.env.POSTGRES_PORT) || 5432,
    database: process.env.POSTGRES_DATABASE || 'personal-finance-tracker',
    username: process.env.POSTGRES_USERNAME || 'postgres',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    migrations: [__dirname + '/**/migrations/*{.ts,.js}'],
});
//# sourceMappingURL=ormconfig.js.map
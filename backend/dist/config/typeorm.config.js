"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
exports.typeOrmConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'personal-finance-tracker',
    username: 'postgres',
    autoLoadEntities: true,
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map
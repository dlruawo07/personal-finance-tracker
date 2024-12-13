"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("./auth/guard/auth.guard");
const jwt_1 = require("@nestjs/jwt");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const jwtService = app.get(jwt_1.JwtService);
    const reflector = app.get(core_1.Reflector);
    const authGuard = new auth_guard_1.AuthGuard(jwtService, reflector);
    app.useGlobalGuards(authGuard);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Personal Finance Tracker')
        .setDescription('Personal Finance Tracker')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/api/docs', app, document, {
        swaggerOptions: { persistAuthorization: true },
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const response_1 = require("../core/http/response");
const swagger_1 = require("@nestjs/swagger");
const decorator_1 = require("../common/decorator");
const dto_1 = require("../common/dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async getAll() {
        const data = await this.authService.findAll();
        return new response_1.DataResponse(response_1.StatusCode.SUCCESS, '성공', data);
    }
    async signUp(signUpDto) {
        await this.authService.signUp(signUpDto);
        return new response_1.MessageResponse(response_1.StatusCode.SUCCESS, '성공');
    }
    async signIn(signInDto) {
        const accessToken = await this.authService.signIn(signInDto);
        return new response_1.DataResponse(response_1.StatusCode.SUCCESS, '성공', accessToken);
    }
    getProfile(req) {
        return new response_1.DataResponse(response_1.StatusCode.SUCCESS, '성공', req.user);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '전체 사용자 조회' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getAll", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '사용자 회원가입' }),
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignUpDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, decorator_1.Public)(),
    (0, swagger_1.ApiOperation)({ summary: '사용자 로그인' }),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SignInDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '내 프로필 조회' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", response_1.DataResponse)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('USER AUTHENTICATION'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const constants_1 = require("../common/constants");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async findAll() {
        return await this.usersService.findAll();
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user || user.password !== password) {
            return null;
        }
        return user.email;
    }
    async signIn(signInDto) {
        const { email, password } = signInDto;
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('존재하지 않는 사용자입니다.');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('비밀번호가 일치하지 않습니다.');
        }
        const payload = { sub: user.id, email: user.email };
        return {
            accessToken: await this.jwtService.signAsync(payload),
        };
    }
    async signUp(signUpDto) {
        const { email, password } = signUpDto;
        const user = await this.usersService.findByEmail(email);
        if (user) {
            throw new common_1.ConflictException('이미 존재하는 이메일입니다.');
        }
        const hashedPassword = await bcrypt.hash(password, constants_1.SALT_ROUND);
        await this.usersService.createUser(email, hashedPassword);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
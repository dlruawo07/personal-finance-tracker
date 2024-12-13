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
exports.SignInDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignInDto {
}
exports.SignInDto = SignInDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로그인 ID',
        required: true,
        type: String,
        example: 'dlruawo07@naver.com',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '로그인 비밀번호',
        required: true,
        type: String,
        example: '!Q2w3e4r',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?=.{8,})/, {
        message: '비밀번호는 8자 이상이여야 하며 특수문자, 대문자, 소문자를 각각 최소 1자 포함해야 합니다.',
    }),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
//# sourceMappingURL=sign-in.dto.js.map
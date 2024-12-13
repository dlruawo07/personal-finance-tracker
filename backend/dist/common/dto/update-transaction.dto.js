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
exports.UpdateTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateTransactionDto {
}
exports.UpdateTransactionDto = UpdateTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수입 / 지출 내역 ID',
        required: true,
        type: Number,
        example: 1,
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateTransactionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수입 / 지출 날짜',
        required: false,
        type: String,
        example: '2024-12-13',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], UpdateTransactionDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수입 / 지출 금액',
        required: false,
        type: Number,
        example: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdateTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '카테고리',
        required: false,
        type: String,
        example: 'Food',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTransactionDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '상세 내역',
        required: false,
        type: String,
        example: '아침식사',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTransactionDto.prototype, "detail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '비고',
        required: false,
        type: String,
        example: '간식',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTransactionDto.prototype, "description", void 0);
//# sourceMappingURL=update-transaction.dto.js.map
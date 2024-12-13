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
exports.CreateTransactionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../common/enums");
class CreateTransactionDto {
}
exports.CreateTransactionDto = CreateTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수입 / 지출 날짜',
        required: true,
        type: String,
        example: '2024-12-13',
    }),
    (0, class_transformer_1.Type)(() => Date),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateTransactionDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수입 / 지출',
        required: true,
        enum: enums_1.TransactionType,
        example: enums_1.TransactionType.INCOME,
    }),
    (0, class_validator_1.IsEnum)(enums_1.TransactionType),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '수입 / 지출 금액',
        required: true,
        type: Number,
        example: 0,
    }),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "amount", void 0);
//# sourceMappingURL=create-transaction.dto.js.map
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
exports.TransactionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const transactions_service_1 = require("./transactions.service");
const response_1 = require("../core/http/response");
const dto_1 = require("../common/dto");
let TransactionsController = class TransactionsController {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    async getAllTransactions(req, params) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const transactions = await this.transactionsService.findAll(userId, type);
        return new response_1.DataResponse(response_1.StatusCode.SUCCESS, '성공', transactions);
    }
    async addTransaction(req, params, createTransactionDto) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const { message } = await this.transactionsService.createTransaction(userId, type, createTransactionDto);
        return new response_1.MessageResponse(message === '성공' ? response_1.StatusCode.SUCCESS : response_1.StatusCode.FAILURE, message);
    }
    async editTransaction(req, params, updateTransactionDto) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const { message } = await this.transactionsService.updateTransaction(userId, type, updateTransactionDto);
        return new response_1.MessageResponse(message === '성공' ? response_1.StatusCode.SUCCESS : response_1.StatusCode.FAILURE, message);
    }
    async deleteTransaction(req, params, deleteTransactionDto) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const { message } = await this.transactionsService.deleteTransaction(userId, type, deleteTransactionDto);
        return new response_1.MessageResponse(message === '성공' ? response_1.StatusCode.SUCCESS : response_1.StatusCode.FAILURE, message);
    }
};
exports.TransactionsController = TransactionsController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '지출 / 수입 내역 조회' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':type'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "getAllTransactions", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '지출 / 수입 내역 추가' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(':type/add'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams,
        dto_1.CreateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "addTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '지출 / 수입 내역 수정' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)(':type/edit'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams,
        dto_1.UpdateTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "editTransaction", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '지출 / 수입 내역 삭제' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':type/delete'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams,
        dto_1.DeleteTransactionDto]),
    __metadata("design:returntype", Promise)
], TransactionsController.prototype, "deleteTransaction", null);
exports.TransactionsController = TransactionsController = __decorate([
    (0, swagger_1.ApiTags)('TRANSACTIONS'),
    (0, common_1.Controller)('transactions'),
    (0, swagger_1.ApiExtraModels)(),
    __metadata("design:paramtypes", [transactions_service_1.TransactionsService])
], TransactionsController);
//# sourceMappingURL=transactions.controller.js.map
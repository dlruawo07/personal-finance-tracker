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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transaction_entity_1 = require("./transaction.entity");
const typeorm_2 = require("typeorm");
let TransactionsService = class TransactionsService {
    constructor(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    async findAll(userId, type) {
        return await this.transactionsRepository.find({
            where: { type, userId },
            order: { date: 'ASC' },
        });
    }
    async createTransaction(userId, type, createTransactionDto) {
        const transaction = this.transactionsRepository.create({
            userId,
            type,
            ...createTransactionDto,
        });
        await this.transactionsRepository.save(transaction);
        return { message: '성공' };
    }
    async updateTransaction(userId, type, updateTransactionDto) {
        const { id, ...rest } = updateTransactionDto;
        await this.transactionsRepository.update({ id }, {
            userId,
            type,
            ...rest,
        });
        return { message: '성공' };
    }
    async deleteTransaction(userId, type, deleteTransactionDto) {
        const { id } = deleteTransactionDto;
        await this.transactionsRepository.delete({ id, userId, type });
        return { message: '성공' };
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transaction_entity_1.Transaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map
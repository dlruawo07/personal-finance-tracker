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
exports.CategoriesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const categories_service_1 = require("./categories.service");
const response_1 = require("../core/http/response");
const dto_1 = require("../common/dto");
let CategoriesController = class CategoriesController {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
    }
    async getAllCategories(req, params) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const categories = await this.categoriesService.findAll(userId, type);
        return new response_1.DataResponse(response_1.StatusCode.SUCCESS, '성공', categories);
    }
    async addDefaultCategories() {
        const { message } = await this.categoriesService.addDefaultCategories();
        return new response_1.MessageResponse(message === '성공' ? response_1.StatusCode.SUCCESS : response_1.StatusCode.FAILURE, message);
    }
    async addCategory(req, params, categoryDto) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const { name } = categoryDto;
        const { message } = await this.categoriesService.update('add', type, name, userId);
        return new response_1.MessageResponse(message === '성공' ? response_1.StatusCode.SUCCESS : response_1.StatusCode.FAILURE, message);
    }
    async deleteCategory(req, params, categoryDto) {
        const { user: { sub: userId }, } = req;
        const { type } = params;
        const { name } = categoryDto;
        const { message } = await this.categoriesService.update('delete', type, name, userId);
        return new response_1.MessageResponse(message === '성공' ? response_1.StatusCode.SUCCESS : response_1.StatusCode.FAILURE, message);
    }
};
exports.CategoriesController = CategoriesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '전체 카테고리 조회' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)(':type'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "getAllCategories", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '기본 카테고리 추가 ' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('default'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addDefaultCategories", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '카테고리 추가' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(':type/add'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams,
        dto_1.CategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "addCategory", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '카테고리 삭제' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(':type/delete'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.TransactionTypeParams,
        dto_1.CategoryDto]),
    __metadata("design:returntype", Promise)
], CategoriesController.prototype, "deleteCategory", null);
exports.CategoriesController = CategoriesController = __decorate([
    (0, swagger_1.ApiTags)('CATEGORIES'),
    (0, common_1.Controller)('categories'),
    (0, swagger_1.ApiExtraModels)(dto_1.CategoryDto, dto_1.TransactionTypeParams),
    __metadata("design:paramtypes", [categories_service_1.CategoriesService])
], CategoriesController);
//# sourceMappingURL=categories.controller.js.map
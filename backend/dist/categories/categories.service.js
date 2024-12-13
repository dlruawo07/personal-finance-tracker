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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const category_entity_1 = require("./category.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const constants_1 = require("../common/constants");
const enums_1 = require("../common/enums");
let CategoriesService = class CategoriesService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async findAll(userId, type) {
        const allCategories = await this.categoriesRepository.find({
            where: { type },
            order: { userId: 'DESC', name: 'ASC' },
        });
        const categories = allCategories.filter((category) => category.userId === userId || category.userId === null);
        return categories;
    }
    async addDefaultCategories() {
        const defaultCategories = (await this.categoriesRepository.find()).filter((category) => category.userId === null);
        if (defaultCategories.length) {
            return { message: '기본 카테고리가 이미 존재합니다.' };
        }
        await Promise.all(constants_1.SPENDING_CATEGORIES.map(async (category) => {
            await this.update('add', enums_1.TransactionType.SPENDING, category);
        }));
        await Promise.all(constants_1.INCOME_CATEGORIES.map(async (category) => {
            await this.update('add', enums_1.TransactionType.INCOME, category);
        }));
        return { message: '성공' };
    }
    async update(action, type, name, userId) {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        const categories = await this.categoriesRepository.find({
            where: { type, name: formattedName },
        });
        const category = categories.find((category) => category.userId === userId || category.userId === null);
        if (action === 'add') {
            if (category) {
                return { message: '이미 존재하는 카테고리입니다.' };
            }
            await this.categoriesRepository.save(this.categoriesRepository.create({
                type,
                name: formattedName,
                userId: userId ? userId : null,
            }));
        }
        else if (action === 'delete') {
            if (!category) {
                return { message: '존재하지 않는 카테고리입니다.' };
            }
            await this.categoriesRepository.delete({
                userId,
                type,
                name: formattedName,
            });
        }
        await this.categoriesRepository.find({
            where: { userId },
        });
        return { message: '성공' };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map
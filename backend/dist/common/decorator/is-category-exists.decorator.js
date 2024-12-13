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
exports.CategoryValidator = void 0;
exports.IsCategoryExists = IsCategoryExists;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_entity_1 = require("../../categories/category.entity");
const typeorm_2 = require("typeorm");
let CategoryValidator = class CategoryValidator {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    async isCategoryValid(name) {
        const category = await this.categoriesRepository.findOne({
            where: { name },
        });
        return !!category;
    }
};
exports.CategoryValidator = CategoryValidator;
exports.CategoryValidator = CategoryValidator = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryValidator);
function IsCategoryExists(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isCategoryExists',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                async validate(value, args) {
                    const categoryValidator = args.constraints[0];
                    return await categoryValidator.isCategoryValid(value);
                },
                defaultMessage(args) {
                    return `Category "${args.value}" does not exist in the database.`;
                },
            },
        });
    };
}
//# sourceMappingURL=is-category-exists.decorator.js.map
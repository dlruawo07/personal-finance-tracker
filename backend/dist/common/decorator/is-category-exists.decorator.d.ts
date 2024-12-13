import { ValidationOptions } from 'class-validator';
import { Category } from 'src/categories/category.entity';
import { Repository } from 'typeorm';
export declare class CategoryValidator {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    isCategoryValid(name: string): Promise<boolean>;
}
export declare function IsCategoryExists(validationOptions?: ValidationOptions): (object: object, propertyName: string) => void;

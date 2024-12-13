import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/categories/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryValidator {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async isCategoryValid(name: string): Promise<boolean> {
    const category = await this.categoriesRepository.findOne({
      where: { name },
    });
    return !!category;
  }
}

export function IsCategoryExists(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isCategoryExists',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const categoryValidator = args.constraints[0] as CategoryValidator;
          return await categoryValidator.isCategoryValid(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `Category "${args.value}" does not exist in the database.`;
        },
      },
    });
  };
}

import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { INCOME_CATEGORIES, SPENDING_CATEGORIES } from 'src/common/constants';
import { TransactionType } from 'src/common/enums';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findAll(userId: number, type: TransactionType): Promise<Category[]> {
    const allCategories = await this.categoriesRepository.find({
      where: { type },
      order: { userId: 'DESC', name: 'ASC' },
    });

    const categories = allCategories.filter(
      (category) => category.userId === userId || category.userId === null,
    );

    return categories;
  }

  async addDefaultCategories(): Promise<{ message: string }> {
    const defaultCategories = (await this.categoriesRepository.find()).filter(
      (category) => category.userId === null,
    );
    if (defaultCategories.length) {
      return { message: '기본 카테고리가 이미 존재합니다.' };
    }

    await Promise.all(
      SPENDING_CATEGORIES.map(async (category) => {
        await this.update('add', TransactionType.SPENDING, category);
      }),
    );

    await Promise.all(
      INCOME_CATEGORIES.map(async (category) => {
        await this.update('add', TransactionType.INCOME, category);
      }),
    );

    return { message: '성공' };
  }

  async update(
    action: 'add' | 'delete',
    type: TransactionType,
    name: string,
    userId?: number,
  ): Promise<{ message: string }> {
    const formattedName =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const categories = await this.categoriesRepository.find({
      where: { type, name: formattedName },
    });

    const category = categories.find(
      (category) => category.userId === userId || category.userId === null,
    );

    if (action === 'add') {
      if (category) {
        return { message: '이미 존재하는 카테고리입니다.' };
      }
      await this.categoriesRepository.save(
        this.categoriesRepository.create({
          type,
          name: formattedName,
          userId: userId ? userId : null,
        }),
      );
    } else if (action === 'delete') {
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
}

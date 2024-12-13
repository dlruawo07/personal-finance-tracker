import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { TransactionType } from 'src/common/enums';
export declare class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    findAll(userId: number, type: TransactionType): Promise<Category[]>;
    addDefaultCategories(): Promise<{
        message: string;
    }>;
    update(action: 'add' | 'delete', type: TransactionType, name: string, userId?: number): Promise<{
        message: string;
    }>;
}

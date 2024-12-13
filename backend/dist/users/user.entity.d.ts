import { Category } from 'src/categories/category.entity';
import { Transaction } from 'src/transactions/transaction.entity';
import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    transaction: Transaction[];
    categories: Category[];
    createdAt: Date;
    updatedAt: Date;
}

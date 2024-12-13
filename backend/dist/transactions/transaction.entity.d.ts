import { TransactionType } from 'src/common/enums';
import { User } from 'src/users/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Transaction extends BaseEntity {
    id: number;
    date: Date;
    type: TransactionType;
    amount: number;
    category: string;
    detail: string;
    description?: string | null;
    userId: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}

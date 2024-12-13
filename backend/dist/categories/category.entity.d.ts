import { TransactionType } from 'src/common/enums';
import { User } from 'src/users/user.entity';
import { BaseEntity } from 'typeorm';
export declare class Category extends BaseEntity {
    id: number;
    type: TransactionType;
    name: string;
    userId: number;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}

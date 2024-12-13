import { TransactionType } from 'src/common/enums';
export declare class CreateTransactionDto {
    date: Date;
    type: TransactionType;
    amount: number;
    category: string;
    detail: string;
    description?: string | null;
    userId: number;
}

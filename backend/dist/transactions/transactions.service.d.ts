import { CreateTransactionDto } from './../common/dto/create-transaction.dto';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';
import { TransactionType } from 'src/common/enums';
import { DeleteTransactionDto, UpdateTransactionDto } from 'src/common/dto';
export declare class TransactionsService {
    private transactionsRepository;
    constructor(transactionsRepository: Repository<Transaction>);
    findAll(userId: number, type: TransactionType): Promise<Transaction[]>;
    createTransaction(userId: number, type: TransactionType, createTransactionDto: CreateTransactionDto): Promise<{
        message: string;
    }>;
    updateTransaction(userId: number, type: TransactionType, updateTransactionDto: UpdateTransactionDto): Promise<{
        message: string;
    }>;
    deleteTransaction(userId: number, type: TransactionType, deleteTransactionDto: DeleteTransactionDto): Promise<{
        message: string;
    }>;
}

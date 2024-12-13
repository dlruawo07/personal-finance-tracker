import { TransactionsService } from './transactions.service';
import { DataResponse, MessageResponse } from 'src/core/http/response';
import { Transaction } from './transaction.entity';
import { CreateTransactionDto, DeleteTransactionDto, TransactionTypeParams, UpdateTransactionDto } from 'src/common/dto';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    getAllTransactions(req: any, params: TransactionTypeParams): Promise<DataResponse<Transaction[]>>;
    addTransaction(req: any, params: TransactionTypeParams, createTransactionDto: CreateTransactionDto): Promise<MessageResponse>;
    editTransaction(req: any, params: TransactionTypeParams, updateTransactionDto: UpdateTransactionDto): Promise<MessageResponse>;
    deleteTransaction(req: any, params: TransactionTypeParams, deleteTransactionDto: DeleteTransactionDto): Promise<MessageResponse>;
}

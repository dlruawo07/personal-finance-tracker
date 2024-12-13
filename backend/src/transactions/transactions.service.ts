import { CreateTransactionDto } from './../common/dto/create-transaction.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { Repository } from 'typeorm';
import { TransactionType } from 'src/common/enums';
import { DeleteTransactionDto, UpdateTransactionDto } from 'src/common/dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async findAll(userId: number, type: TransactionType): Promise<Transaction[]> {
    return await this.transactionsRepository.find({
      where: { type, userId },
      order: { date: 'ASC' },
    });
  }

  async createTransaction(
    userId: number,
    type: TransactionType,
    createTransactionDto: CreateTransactionDto,
  ): Promise<{ message: string }> {
    const transaction = this.transactionsRepository.create({
      userId,
      type,
      ...createTransactionDto,
    });
    await this.transactionsRepository.save(transaction);

    return { message: '성공' };
  }

  async updateTransaction(
    userId: number,
    type: TransactionType,
    updateTransactionDto: UpdateTransactionDto,
  ): Promise<{ message: string }> {
    const { id, ...rest } = updateTransactionDto;

    await this.transactionsRepository.update(
      { id },
      {
        userId,
        type,
        ...rest,
      },
    );

    return { message: '성공' };
  }

  async deleteTransaction(
    userId: number,
    type: TransactionType,
    deleteTransactionDto: DeleteTransactionDto,
  ): Promise<{ message: string }> {
    const { id } = deleteTransactionDto;

    await this.transactionsRepository.delete({ id, userId, type });

    return { message: '성공' };
  }
}

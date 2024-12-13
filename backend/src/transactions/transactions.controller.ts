import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { TransactionsService } from './transactions.service';
import {
  DataResponse,
  MessageResponse,
  StatusCode,
} from 'src/core/http/response';
import { Transaction } from './transaction.entity';
import {
  CreateTransactionDto,
  DeleteTransactionDto,
  TransactionTypeParams,
  UpdateTransactionDto,
} from 'src/common/dto';

@ApiTags('TRANSACTIONS')
@Controller('transactions')
@ApiExtraModels()
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @ApiOperation({ summary: '지출 / 수입 내역 조회' })
  @ApiBearerAuth()
  @Get(':type')
  async getAllTransactions(
    @Req() req,
    @Param() params: TransactionTypeParams,
  ): Promise<DataResponse<Transaction[]>> {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;

    const transactions = await this.transactionsService.findAll(userId, type);

    return new DataResponse(StatusCode.SUCCESS, '성공', transactions);
  }

  @ApiOperation({ summary: '지출 / 수입 내역 추가' })
  @ApiBearerAuth()
  @Post(':type/add')
  async addTransaction(
    @Req() req,
    @Param() params: TransactionTypeParams,
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<MessageResponse> {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;

    const { message } = await this.transactionsService.createTransaction(
      userId,
      type,
      createTransactionDto,
    );

    return new MessageResponse(
      message === '성공' ? StatusCode.SUCCESS : StatusCode.FAILURE,
      message,
    );
  }

  @ApiOperation({ summary: '지출 / 수입 내역 수정' })
  @ApiBearerAuth()
  @Put(':type/edit')
  async editTransaction(
    @Req() req,
    @Param() params: TransactionTypeParams,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ) {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;

    const { message } = await this.transactionsService.updateTransaction(
      userId,
      type,
      updateTransactionDto,
    );

    return new MessageResponse(
      message === '성공' ? StatusCode.SUCCESS : StatusCode.FAILURE,
      message,
    );
  }

  @ApiOperation({ summary: '지출 / 수입 내역 삭제' })
  @ApiBearerAuth()
  @Delete(':type/delete')
  async deleteTransaction(
    @Req() req,
    @Param() params: TransactionTypeParams,
    @Body() deleteTransactionDto: DeleteTransactionDto,
  ) {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;

    const { message } = await this.transactionsService.deleteTransaction(
      userId,
      type,
      deleteTransactionDto,
    );

    return new MessageResponse(
      message === '성공' ? StatusCode.SUCCESS : StatusCode.FAILURE,
      message,
    );
  }
}

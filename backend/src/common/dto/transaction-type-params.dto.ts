import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { TransactionType } from 'src/common/enums';

export class TransactionTypeParams {
  @ApiProperty({
    required: true,
    enum: TransactionType,
    description: '수입 or 지출',
    example: TransactionType.INCOME,
  })
  @IsEnum(TransactionType)
  type: TransactionType;
}

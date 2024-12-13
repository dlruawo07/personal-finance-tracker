import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class DeleteTransactionDto {
  @ApiProperty({
    description: '수입 / 지출 내역 ID',
    required: true,
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;
}

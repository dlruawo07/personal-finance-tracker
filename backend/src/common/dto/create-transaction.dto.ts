import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
// import { IsCategoryExists } from '../decorator';

export class CreateTransactionDto {
  @ApiProperty({
    description: '수입 / 지출 날짜',
    required: true,
    type: String,
    example: '2024-12-13',
  })
  @Type(() => Date)
  @IsDate()
  date: Date;

  @ApiProperty({
    description: '수입 / 지출 금액',
    required: true,
    type: Number,
    example: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: '카테고리',
    required: true,
    type: String,
    example: 'Food',
  })
  @IsNotEmpty()
  // @IsCategoryExists({ message: 'The selected category does not exist.' })
  category: string;

  @ApiProperty({
    description: '상세 내역',
    required: false,
    type: String,
    example: '아침식사',
  })
  @IsOptional()
  detail?: string;

  @ApiProperty({
    description: '비고',
    required: false,
    type: String,
    example: '간식',
  })
  @IsOptional()
  description?: string | null;
}

import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsNumber, IsNotEmpty } from 'class-validator';
// import { IsCategoryExists } from '../decorator';

export class UpdateTransactionDto {
  @ApiProperty({
    description: '수입 / 지출 내역 ID',
    required: true,
    type: Number,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({
    description: '수입 / 지출 날짜',
    required: false,
    type: String,
    example: '2024-12-13',
  })
  @IsOptional()
  @Type(() => Date)
  date: Date;

  @ApiProperty({
    description: '수입 / 지출 금액',
    required: false,
    type: Number,
    example: 0,
  })
  @IsOptional()
  @IsNumber()
  amount?: number;

  @ApiProperty({
    description: '카테고리',
    required: false,
    type: String,
    example: 'Food',
  })
  @IsOptional()
  // @IsCategoryExists({ message: 'The selected category does not exist.' })
  category?: string;

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

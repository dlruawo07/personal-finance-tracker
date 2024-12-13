import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty({
    description: '카테고리',
    required: true,
    type: String,
    example: 'food',
  })
  @IsString()
  name: string;
}

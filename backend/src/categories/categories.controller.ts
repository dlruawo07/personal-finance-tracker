import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import {
  DataResponse,
  MessageResponse,
  StatusCode,
} from 'src/core/http/response';
import { Category } from './category.entity';
import { CategoryDto, TransactionTypeParams } from 'src/common/dto';

@ApiTags('CATEGORIES')
@Controller('categories')
@ApiExtraModels(CategoryDto, TransactionTypeParams)
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({ summary: '전체 카테고리 조회' })
  @ApiBearerAuth()
  @Get(':type')
  async getAllCategories(
    @Req() req,
    @Param() params: TransactionTypeParams,
  ): Promise<DataResponse<Category[]>> {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;

    const categories = await this.categoriesService.findAll(userId, type);

    return new DataResponse(StatusCode.SUCCESS, '성공', categories);
  }

  @ApiOperation({ summary: '기본 카테고리 추가 ' })
  @ApiBearerAuth()
  @Post('default')
  async addDefaultCategories(): Promise<MessageResponse> {
    const { message } = await this.categoriesService.addDefaultCategories();

    return new MessageResponse(
      message === '성공' ? StatusCode.SUCCESS : StatusCode.FAILURE,
      message,
    );
  }

  @ApiOperation({ summary: '카테고리 추가' })
  @ApiBearerAuth()
  @Post(':type/add')
  async addCategory(
    @Req() req,
    @Param() params: TransactionTypeParams,
    @Body() categoryDto: CategoryDto,
  ): Promise<MessageResponse> {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;
    const { name } = categoryDto;

    const { message } = await this.categoriesService.update(
      'add',
      type,
      name,
      userId,
    );

    return new MessageResponse(
      message === '성공' ? StatusCode.SUCCESS : StatusCode.FAILURE,
      message,
    );
  }

  @ApiOperation({ summary: '카테고리 삭제' })
  @ApiBearerAuth()
  @Post(':type/delete')
  async deleteCategory(
    @Req() req,
    @Param() params: TransactionTypeParams,
    @Body() categoryDto: CategoryDto,
  ): Promise<MessageResponse> {
    const {
      user: { sub: userId },
    } = req;
    const { type } = params;
    const { name } = categoryDto;

    const { message } = await this.categoriesService.update(
      'delete',
      type,
      name,
      userId,
    );

    return new MessageResponse(
      message === '성공' ? StatusCode.SUCCESS : StatusCode.FAILURE,
      message,
    );
  }
}

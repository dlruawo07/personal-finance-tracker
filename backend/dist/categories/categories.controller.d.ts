import { CategoriesService } from './categories.service';
import { DataResponse, MessageResponse } from 'src/core/http/response';
import { Category } from './category.entity';
import { CategoryDto, TransactionTypeParams } from 'src/common/dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(req: any, params: TransactionTypeParams): Promise<DataResponse<Category[]>>;
    addDefaultCategories(): Promise<MessageResponse>;
    addCategory(req: any, params: TransactionTypeParams, categoryDto: CategoryDto): Promise<MessageResponse>;
    deleteCategory(req: any, params: TransactionTypeParams, categoryDto: CategoryDto): Promise<MessageResponse>;
}

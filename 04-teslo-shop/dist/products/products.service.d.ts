import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
export declare class ProductsService {
    private readonly productRepository;
    private readonly logger;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product | undefined>;
    findAll(paginationDto: PaginationDto): Promise<Product[]>;
    findOne(term: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product | undefined>;
    remove(id: string): Promise<string>;
    private handleDBExceptions;
}

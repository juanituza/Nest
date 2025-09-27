"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const uuid_1 = require("uuid");
let ProductsService = class ProductsService {
    productRepository;
    logger = new common_1.Logger('ProductsService');
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(createProductDto) {
        try {
            const product = this.productRepository.create(createProductDto);
            await this.productRepository.save(product);
            return product;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    findAll(paginationDto) {
        const { limit = 10, offset = 0 } = paginationDto;
        return this.productRepository.find({
            take: limit,
            skip: offset,
        });
    }
    async findOne(term) {
        let product = null;
        if ((0, uuid_1.validate)(term)) {
            product = await this.productRepository.findOneBy({ id: term });
        }
        else {
            const queryBuilder = this.productRepository.createQueryBuilder('prod');
            product = await queryBuilder
                .where('UPPER(title) =:title or slug =:slug', {
                title: term.toUpperCase(),
                slug: term.toLowerCase(),
            })
                .getOne();
        }
        if (!product)
            throw new common_1.NotFoundException(`Product with id ${term} not found`);
        return product;
    }
    async update(id, updateProductDto) {
        const product = await this.productRepository.preload({
            id: id,
            ...updateProductDto,
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with id ${id} not found`);
        }
        try {
            await this.productRepository.save(product);
            return product;
        }
        catch (error) {
            this.handleDBExceptions(error);
        }
    }
    async remove(id) {
        const product = await this.findOne(id);
        await this.productRepository.remove(product);
        return `This action removes a #${id} product`;
    }
    handleDBExceptions(error) {
        if (error.code === '23505') {
            throw new common_1.BadRequestException(error.detail);
        }
        this.logger.error(error);
        throw new common_1.InternalServerErrorException('Unexpected error, check server logs');
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
function isValidObjectId(id) { }
//# sourceMappingURL=products.service.js.map
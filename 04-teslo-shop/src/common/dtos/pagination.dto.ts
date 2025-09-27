import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";
import { off } from "process";


export class PaginationDto {
    
    @IsOptional()
    @IsPositive()
    @Type(() => Number)// Transforma a Number
    limit?: number;


    @IsOptional()
    // @IsPositive()
    @Min(0)
    @Type(() => Number)// Transforma a Number
    offset?: number;
}
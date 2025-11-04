import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";
import { off } from "process";


export class PaginationDto {
    
    @ApiProperty({
        required:false,
        default:10,
        description:'How many rows to return',
        example:10,
    })
    @IsOptional()
    @IsPositive()
    @Type(() => Number)// Transforma a Number
    limit?: number;

 @ApiProperty({
        required:false,
        default:0,
        description:'How many rows to skip',
        example:0,
    })
    @IsOptional()
    // @IsPositive()
    @Min(0)
    @Type(() => Number)// Transforma a Number
    offset?: number;
}
import { Controller, Delete, Get, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';


@Controller('cars')
// @UsePipes( ValidationPipe) 
export class CarsController {

    constructor(private readonly carsService: CarsService) {

    }


    @Get()
    getAllCars() {
    return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id',  ParseUUIDPipe)id: string) {
        console.log({id});
        const car = this.carsService.findOneById(id);       
        return car;
    
    }

    @Post()   
    createCar( @Body() CreateCarDto: CreateCarDto) {

        return this.carsService.createCar(CreateCarDto);
    }



    @Patch(':id')
    updateCar( 
    @Param('id' , ParseUUIDPipe)id:string,
    @Body() updateCarDto: UpdateCarDto) {
        return this.carsService.updateCar(id, updateCarDto);
    }


    
    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe) id: string) {
       
        return this.carsService.delete(id);
    }
}

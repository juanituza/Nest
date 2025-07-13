import { BadGatewayException, BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'Toyota',
    //   model: 'Corolla',
    // },
   
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
   

    const car = this.cars.find((car) => car.id === id.toString());
    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);
    return car;
  }

  createCar(CreateCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...CreateCarDto,
    };
    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    

    if (updateCarDto.id && updateCarDto.id !== id) 
      throw new BadRequestException(` Car with ID ${updateCarDto.id} not found`);

    this.cars.map(car => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      
      
      return car;
    });

    return carDB; // retornar el car actualizado
  }

  delete( id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter(car => car.id !== id);
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;

    return 'SEED EXECUTED';
  }

}

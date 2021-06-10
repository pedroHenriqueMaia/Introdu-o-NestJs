import { Controller, Delete, Get, Post } from '@nestjs/common';
var x = 0;
@Controller('cats')
export class CatsController {
  @Post()
  create() {
    return ++x;
  }
@Delete()
delete(){
    return x;
}
  
  @Get()
  findAll() {
    return x;
  }
}
import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { FirstService } from './first.service';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs';
@Controller('first')
export class FirstController {
  constructor(private readonly firstService: FirstService,
     @Inject('FIRST_SERVICE') private readonly secondClient: ClientProxy) {}

  @Post()
  create(@Body() createFirstDto: CreateFirstDto) {
    return this.firstService.create(createFirstDto);
  }

  @Get()
  findAll() {
    console.log("GET first(); catch the endpoint... ");
     return this.secondClient.send('test_signal', 1);
    //return this.firstService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.firstService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFirstDto: UpdateFirstDto) {
    return this.firstService.update(+id, updateFirstDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.firstService.remove(+id);
  }
}

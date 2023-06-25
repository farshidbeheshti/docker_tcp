import { Injectable } from '@nestjs/common';
import { CreateFirstDto } from './dto/create-first.dto';
import { UpdateFirstDto } from './dto/update-first.dto';

@Injectable()
export class FirstService {
  create(createFirstDto: CreateFirstDto) {
    return 'This action adds a new first';
  }

  findAll() {
    return `This action returns all ...`;
  }

  findOne(id: number) {
    return `This action returns a #${id} first`;
  }

  update(id: number, updateFirstDto: UpdateFirstDto) {
    return `This action updates a #${id} first`;
  }

  remove(id: number) {
    return `This action removes a #${id} first`;
  }
}

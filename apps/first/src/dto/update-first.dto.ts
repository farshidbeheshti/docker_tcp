import { PartialType } from '@nestjs/mapped-types';
import { CreateFirstDto } from './create-first.dto';

export class UpdateFirstDto extends PartialType(CreateFirstDto) {}

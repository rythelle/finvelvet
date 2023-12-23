import { Body, Injectable } from '@nestjs/common';
import { CreateOperationDto } from './dto/create-operation.dto';
import { UpdateOperationDto } from './dto/update-operation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import DineroFactory from 'dinero.js';

@Injectable()
export class OperationsService {
  constructor(private prisma: PrismaService) {}

  create(
    @Body()
    { amount, currency, type, username, description, tags }: CreateOperationDto,
  ) {
    const value = DineroFactory({ amount, currency: 'BRL' });

    console.log('11111', { value });

    return this.prisma.operation.create({
      data: { amount: '111', currency, type, username, description, tags },
    });
  }

  findAll(username: string) {
    return this.prisma.operation.findMany({
      where: { username },
    });
  }

  findOne(id: number) {
    return this.prisma.operation.findUnique({
      where: { id },
    });
  }

  update(
    id: number,
    @Body() { description, amount, tags, type }: UpdateOperationDto,
  ) {
    return this.prisma.operation.update({
      data: { description, amount: '12', tags, type },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.operation.delete({ where: { id } });
  }
}

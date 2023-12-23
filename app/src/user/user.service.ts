import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(@Body() createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    const userExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userExists)
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'This email already exists',
        },
        HttpStatus.CONFLICT,
      );

    return this.prisma.user.create({ data: createUserDto });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        created_at: true,
        updated_at: true,
        username: true,
        password: false,
        email: true,
        active: true,
      },
      where: { admin: false },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        created_at: true,
        updated_at: true,
        username: true,
        password: false,
        email: true,
        active: true,
        admin: true,
      },
    });
  }

  update(id: number, @Body() { username, password }: UpdateUserDto) {
    return this.prisma.user.update({
      data: { username, password },
      where: { id },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}

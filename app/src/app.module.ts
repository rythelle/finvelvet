import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './user/user.controller';
import { UsersModule } from './user/user.module';
import { UsersService } from './user/user.service';
import { OperationsModule } from './operation/operations.module';
import { OperationsController } from './operation/operations.controller';
import { OperationsService } from './operation/operations.service';

@Module({
  imports: [PrismaModule, UsersModule, OperationsModule],
  controllers: [UsersController, OperationsController],
  providers: [UsersService, OperationsService],
})
export class AppModule {}

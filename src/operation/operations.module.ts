import { Module } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { OperationsController } from './operations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OperationsController],
  providers: [OperationsService],
  imports: [PrismaModule],
})
export class OperationsModule {}

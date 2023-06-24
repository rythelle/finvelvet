import { ApiProperty, PartialType } from '@nestjs/swagger';
import type { OperationType, Prisma } from '@prisma/client';
import { CreateOperationDto } from './create-operation.dto';

export class UpdateOperationDto extends PartialType(CreateOperationDto) {
  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty({ required: true })
  amount: number;

  @ApiProperty({ required: true })
  type: OperationType;

  @ApiProperty({ required: false })
  tags?: Prisma.JsonValue;
}

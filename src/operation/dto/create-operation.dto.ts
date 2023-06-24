import { ApiProperty } from '@nestjs/swagger';
import type { OperationType, Prisma } from '@prisma/client';

export class CreateOperationDto {
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

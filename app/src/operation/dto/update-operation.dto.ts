import { ApiProperty, PartialType } from '@nestjs/swagger';
import { OperationType, Prisma } from '@prisma/client';
import { CreateOperationDto } from './create-operation.dto';
import {
  IsCurrency,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateOperationDto extends PartialType(CreateOperationDto) {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  amount: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  currency: string;

  @ApiProperty({ required: false })
  @IsEnum(OperationType)
  @IsOptional()
  type: OperationType;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsJSON()
  @IsOptional()
  tags?: Prisma.JsonValue;
}

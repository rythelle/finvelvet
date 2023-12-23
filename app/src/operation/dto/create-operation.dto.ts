import { ApiProperty } from '@nestjs/swagger';
import { OperationType, Prisma } from '@prisma/client';
import {
  IsNotEmpty,
  IsString,
  IsCurrency,
  IsEnum,
  IsJSON,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateOperationDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEnum(OperationType)
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

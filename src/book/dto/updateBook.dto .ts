import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmpty,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';

export class updateBookDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly author: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  readonly price: number;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Category)
  readonly category: Category;

  @IsEmpty()
  readonly user: User;
}

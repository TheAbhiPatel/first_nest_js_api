import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';

export class createBookDto {
  @ApiProperty({
    description: 'title of the book',
    example: 'The Holi Book',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: 'description of the book',
    example: 'something .. whatever you want',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: 'author of the book',
    example: 'Mr. Jone Doe',
  })
  @IsNotEmpty()
  @IsString()
  readonly author: string;

  @ApiProperty({
    description: 'price of the book',
    example: '32$',
  })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({ enum: ['adventure', 'fantasy', 'classics'] })
  @IsNotEmpty()
  @IsEnum(Category)
  readonly category: Category;

  @IsEmpty()
  readonly user: User;
}

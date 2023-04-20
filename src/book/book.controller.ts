import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { BookService } from './book.service';
import { createBookDto } from './dto/createBook.dto';
import { updateBookDto } from './dto/updateBook.dto ';
import { Book } from './schemas/book.schema';

@ApiBearerAuth()
@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @ApiQuery({ name: 'page', type: Number })
  @Get()
  async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
    return this.bookService.findAll(query);
  }

  @Post()
  @UseGuards(AuthGuard())
  async createBook(@Body() book: createBookDto, @Req() req): Promise<Book> {
    return this.bookService.create(book, req.user);
  }

  @Get(':id')
  async getOneBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Patch(':id')
  async updateBook(@Body() book: updateBookDto, @Param('id') id: string) {
    return this.bookService.update(id, book);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string): Promise<Book> {
    return this.bookService.delete(id);
  }
}

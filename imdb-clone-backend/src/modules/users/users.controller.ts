import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  Get,
  Query,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseMessage } from 'src/shared/utils/response.decorator';
import { responseMessage } from 'src/shared/utils/response.constant';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ResponseMessage(responseMessage.SUCCESSFULLY_CREATED)
  async create(@Body() createUser: CreateUserDto) {
    return this.usersService.createOne(createUser);
  }
}

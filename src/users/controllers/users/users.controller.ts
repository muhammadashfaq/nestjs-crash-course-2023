import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers(@Query('sortDesc', ParseBoolPipe) sortDesc: boolean) {
    console.log('[sortDesc]', sortDesc);
    return this.userService.fetchUsers();
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'Muhammad Ashfaq',
        email: 'ashfaq@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  //Nested routes
  @Get('posts/comments')
  getUserPostsComments() {
    return [
      {
        id: 1,
        title: 'Post 1',
        comments: [],
      },
      {
        id: 2,
        title: 'Post 2',
        comments: [],
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() payload: CreateUserDto) {
    console.log('[body]', payload);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}

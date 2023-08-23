import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  //Typical responsible for handling all business logic

  private fakeUsers = [
    { id: 1, name: 'Chintoo' },
    { id: 2, name: 'Mintoo' },
  ];
  fetchUsers() {
    return this.fakeUsers;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  private users: any = [
    { id: 1, username: 'admin', email: 'admin@example.com', role: 'Administrator' }
    { id: 2, username: 'user1', email: 'user1@example.com', role: 'User' }
    { id: 3, username: 'user2', email: 'user2@example.com', role: 'User' }
  ];

  getUsers(): any {
    return this.users;
  }
  
}

import { Injectable } from '@angular/core';

@Injectable()
export class UserFullNameService {
  constructor() {}

  getUserFullName(): string {
    return 'tuskdesk user';
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '@tuskdesk-suite/data-models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  userById(id: number): Observable<User> {
    return this.http.get<User>(`/api/users/${id}`);
  }
}

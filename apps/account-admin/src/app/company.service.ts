import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Company } from './company.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanyService {
  _companies$: Observable<Company[]>;

  constructor() {
    this._companies$ = Observable.of(this._companies);
  }

  companies(): Observable<Company[]> {
    return this._companies$;
  }

  company(id: string): Observable<Company> {
    return this._companies$
      .pipe(
        map(companies => companies.find(c => c.id === id))
      );
  }

  _companies: Company[] = [
    {
      id: 'a1', name: 'Lake Farms', users: [
      {id: 'a1u1', username: 'cmoss', fullName: 'Carter Moss'},
      {id: 'a1u2', username: 'francis', fullName: 'Frank Smith'},
      {id: 'a1u3', username: 'yardling', fullName: 'Kim Rush'}
    ]
    },
    {
      id: 'a2', name: 'UWear', users: [
      {id: 'a2u1', username: 'mr90s', fullName: 'Peter Jones'}
    ]
    },
    {
      id: 'a3', name: 'Time Travel Inc', users: [
      {id: 'a3u1', username: 'msantana', fullName: 'Margo Santana'}
    ]
    },
    {
      id: 'a4', name: 'Range Solutions', users: [
      {id: 'a4u1', username: 'optin88', fullName: 'Mark Press'}
    ]
    },
    {
      id: 'a5', name: 'Metric Acoustics', users: [
      {id: 'a5u1', username: 'tinycap', fullName: 'Terry Cruz'}
    ]
    }
  ];
}

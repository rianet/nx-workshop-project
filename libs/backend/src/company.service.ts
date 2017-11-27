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
    return this._companies$.pipe(map(companies => companies.find(c => c.id === id)));
  }

  _companies: Company[] = [
    {
      id: 'c1',
      name: 'Lake Farms',
      users: [
        { id: 'c1u1', username: 'cmoss', fullName: 'Carter Moss' },
        { id: 'c1u2', username: 'francis', fullName: 'Frank Smith' },
        { id: 'c1u3', username: 'yardling', fullName: 'Kim Rush' }
      ]
    },
    {
      id: 'c2',
      name: 'UWear',
      users: [{ id: 'c2u1', username: 'mr90s', fullName: 'Peter Jones' }]
    },
    {
      id: 'c3',
      name: 'Time Travel Inc',
      users: [{ id: 'c3u1', username: 'msantana', fullName: 'Margo Santana' }]
    },
    {
      id: 'c4',
      name: 'Range Solutions',
      users: [{ id: 'c4u1', username: 'optin88', fullName: 'Mark Press' }]
    },
    {
      id: 'c5',
      name: 'Metric Acoustics',
      users: [{ id: 'c5u1', username: 'tinycap', fullName: 'Terry Cruz' }]
    }
  ];
}
